import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../../styles/CodeExplainer.css';

const progressMessages = [
  "Cooking up your code...",
  "Results are on the way...",
  "Simplifying them...",
  "Getting things together...",
];

const CodeExplainer = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [progressMessage, setProgressMessage] = useState('');
  const navigate = useNavigate();

  // Using a ref to hold interval id so we can clear it
  const intervalRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setProgressMessage(progressMessages[0]);

    let msgIndex = 1;
    intervalRef.current = setInterval(() => {
      setProgressMessage(progressMessages[msgIndex]);
      msgIndex++;
      if (msgIndex >= progressMessages.length) {
        msgIndex = 0;
      }
    }, 3000);

    try {
      const response = await axios.post('http://localhost:8080/api/explain', {
        model: "llama3:3b",
        prompt: code,
      });

      clearInterval(intervalRef.current);
      setProgressMessage('');
      navigate('/result', { state: { code, explanation: response.data } });
    } catch (error) {
      console.error('Error fetching explanation:', error);
      clearInterval(intervalRef.current);
      setProgressMessage('');
      navigate('/result', { state: { code, explanation: 'Error getting explanation.' } });
    } finally {
      setLoading(false);
    }
  };

  // Cleanup interval if component unmounts while loading
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="code-explainer-wrapper">
      <div className="code-explainer-container">
        <div className="header-box">
          <h1 className="main-heading">CodeSense - Code Explainer</h1>
          <p className="sub-heading">Understand your code instantly using AI-powered explanations!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            id="codeInput"
            rows={10}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
            required
            className="code-textarea"
          />
          <button type="submit" disabled={loading} className="explain-button">
            {loading ? 'Explaining...' : 'Explain Code'}
          </button>
        </form>

        {/* Progress messages shown only when loading */}
        {loading && <p className="progress-message">{progressMessage}</p>}

        <div className="text-buttons-container">
          <button className="text-button">Learn More</button>
          <button className="text-button">Try Another Code</button>
          <button className="text-button">View Examples</button>
        </div>
      </div>
    </div>
  );
};

export default CodeExplainer;
