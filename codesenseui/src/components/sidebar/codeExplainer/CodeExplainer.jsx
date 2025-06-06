import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../../styles/CodeExplainer.css';

const CodeExplainer = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/api/explain', {
        model: "llama3:3b",
        prompt: code,
      });

      navigate('/result', { state: { code, explanation: response.data } });
    } catch (error) {
      console.error('Error fetching explanation:', error);
      navigate('/result', { state: { code, explanation: 'Error getting explanation.' } });
    } finally {
      setLoading(false);
    }
  };

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
