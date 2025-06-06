import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../../styles/ResultPage.css';

const ResultPage = () => {
  const location = useLocation();
  const { code, explanation } = location.state || { code: '', explanation: '' };

  return (
    <div className="result-result-page-container">
      <div className="result-card result-left-card">
        <h2>Pasted Code</h2>
        <pre className="result-code-display">{code}</pre>
      </div>

      <div className="result-card result-right-card">
        <h2 className="result-explanation-header">Explanation</h2>
        <pre className="result-explanation-display">
          {explanation ? explanation : 'No output yet.'}
        </pre>
      </div>
    </div>
  );
};

export default ResultPage;
