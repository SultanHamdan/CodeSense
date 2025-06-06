import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeExplainer from './components/sidebar/codeExplainer/CodeExplainer';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import ResultPage from './components/sidebar/codeExplainer/ResultPage';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div>
        <NavBar onToggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

        <Routes>
          {/* Default route → Dashboard */}
          <Route path="/" element={<Dashboard />} />
          {/* Optional: still allow /dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* You can add other routes here */}
          <Route path="/codeexplainer" element={<CodeExplainer />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
