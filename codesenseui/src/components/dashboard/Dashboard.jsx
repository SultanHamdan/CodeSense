import React from 'react';
import '../../styles/Dashboard.css'; // CSS file stays the same

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="card-grid">

                <div className="card large-card">
                    <h1>Stick<br/>to the<br/>plan.</h1>
                </div>

                <div className="card small-card">
                    <h3>FYI</h3>
                    <p>Too much money in low process stocks can create risks on particular faces.</p>
                </div>

                <div className="card small-card">
                    <h3>GET<br/>ON<br/>UP.</h3>
                </div>

                <div className="card">
                    <h3>Card 4</h3>
                    <p>Additional UI content here.</p>
                </div>

                <div className="card">
                    <h3>Card 5</h3>
                    <p>Additional UI content here.</p>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
