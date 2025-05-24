import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import './StockPage.css';

const stockOptions = ['AAPL', 'GOOGL', 'MSFT'];

const dummyPrices = {
  AAPL: [
    { date: 'May 20', price: 172 },
    { date: 'May 21', price: 173 },
    { date: 'May 22', price: 174 },
    { date: 'May 23', price: 174.5 },
    { date: 'May 24', price: 175 },
  ],
  GOOGL: [
    { date: 'May 20', price: 125 },
    { date: 'May 21', price: 126 },
    { date: 'May 22', price: 126.5 },
    { date: 'May 23', price: 127 },
    { date: 'May 24', price: 128 },
  ],
  MSFT: [
    { date: 'May 20', price: 310 },
    { date: 'May 21', price: 311 },
    { date: 'May 22', price: 313 },
    { date: 'May 23', price: 314 },
    { date: 'May 24', price: 315 },
  ],
};

const StockPage = () => {
  const [selectedStock, setSelectedStock] = useState('AAPL');
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(dummyPrices[selectedStock]);
  }, [selectedStock]);

  return (
    <div className="stock-container">
      <h2>Stock Price Viewer</h2>

      <select
        value={selectedStock}
        onChange={(e) => setSelectedStock(e.target.value)}
        className="dropdown"
      >
        {stockOptions.map((stock) => (
          <option key={stock} value={stock}>
            {stock}
          </option>
        ))}
      </select>

      <div className="chart-box">
        <h3>{selectedStock} Price Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#007bff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockPage;
