import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StockPage from './pages/StockPage';
import CorrelationHeatmap from './pages/CorrelationHeatmap';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Stock Analytics Dashboard</h1>
        <Link to="/">Stock Page</Link> | <Link to="/heatmap">Correlation Heatmap</Link>
        <Routes>
          <Route path="/" element={<StockPage />} />
          <Route path="/heatmap" element={<CorrelationHeatmap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
