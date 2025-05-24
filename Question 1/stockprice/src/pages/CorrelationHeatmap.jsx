import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { x: 1, y: 1, z: 100 },
  { x: 1, y: 2, z: 60 },
  { x: 2, y: 1, z: 80 },
  { x: 2, y: 2, z: 30 },
  { x: 3, y: 1, z: 50 },
  { x: 3, y: 2, z: 90 },
];

function CorrelationHeatmap() {
  return (
    <div className="container">
      <h2>Correlation Heatmap</h2>
      <ScatterChart
        width={700}
        height={400}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis dataKey="x" name="Stock A" />
        <YAxis dataKey="y" name="Stock B" />
        <ZAxis dataKey="z" range={[60, 400]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Correlation" data={data} fill="#8884d8" />
      </ScatterChart>
    </div>
  );
}

export default CorrelationHeatmap;
