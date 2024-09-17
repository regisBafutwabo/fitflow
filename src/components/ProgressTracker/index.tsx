import React from 'react';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const data = [
  { name: 'Week 1', weight: 160, reps: 10 },
  { name: 'Week 2', weight: 165, reps: 11 },
  { name: 'Week 3', weight: 170, reps: 11 },
  { name: 'Week 4', weight: 175, reps: 12 },
];

console.log("window", window.innerWidth)
const ProgressTracker = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Progress Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <h3 className="text-sm font-medium">Weight</h3>
            <p className="text-2xl font-bold">175 lbs</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Reps</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Sets</h3>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
        <LineChart width={window.innerWidth > 600 ? 600 : 375} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="weight" stroke="#8884d8" />
          <Line yAxisId="right" type="monotone" dataKey="reps" stroke="#82ca9d" />
        </LineChart>
      </CardContent>
    </Card>
  )
}

export default ProgressTracker;