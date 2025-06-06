import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../../styles/ResultPage.css';

const ResultPage = () => {
  const location = useLocation();
  const { code, explanation } = location.state || { code: '', explanation: '' };

  return (
    <div className="result-page-container">
      <div className="card left-card">
        <h2>Pasted Code</h2>
        <pre className="code-display">{code}</pre>
      </div>

      <div className="card right-card">
        <h2 className="explanation-header">Explanation</h2> {/* Always show this */}
        <h4 className="output-heading">(Output)</h4> {/* Always show this */}
        <pre className="explanation-display">
          {explanation ? explanation : 'No output yet.'} {/* Default fallback */}
        </pre>
      </div>
    </div>
  );
};

export default ResultPage;
