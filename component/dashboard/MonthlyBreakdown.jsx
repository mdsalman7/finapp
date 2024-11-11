import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const MonthlyBreakdown = ({ data }) => {
  const pieData = [
    { name: 'Spending', value: data.spending, color: '#FF6B6B' },
    { name: 'Investment', value: data.investment, color: '#4ECDC4' },
    { name: 'Subscription', value: data.subscription, color: '#45B7D1' },
    { name: 'Savings', value: data.savings, color: '#96CEB4' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Month Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {pieData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="flex items-center">
                <span
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                {item.name}
              </span>
              <span className="font-semibold">${item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyBreakdown;