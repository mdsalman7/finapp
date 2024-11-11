import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const MonthlySummary = ({ data, selectedCategory, onCategorySelect }) => {
  const categories = [
    { key: 'spending', label: 'Total Spending', value: data.spending },
    { key: 'investment', label: 'Total Investment', value: data.investment },
    { key: 'subscription', label: 'Subscriptions', value: data.subscription },
    { key: 'savings', label: 'Savings', value: data.savings }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {categories.map(({ key, label, value }) => (
            <div
              key={key}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedCategory === key
                  ? 'bg-blue-100 border-2 border-blue-500'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => onCategorySelect(key)}
            >
              <p className="text-gray-600">{label}</p>
              <p className="text-2xl font-bold">${value}</p>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">
              {categories.find(c => c.key === selectedCategory)?.label} Details
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Month-over-Month Change</span>
                <span className="font-medium text-green-600">+5.2%</span>
              </div>
              <div className="flex justify-between">
                <span>Year-over-Year Change</span>
                <span className="font-medium text-green-600">+12.8%</span>
              </div>
              <div className="flex justify-between">
                <span>Average (6 months)</span>
                <span className="font-medium">${(data[selectedCategory] * 0.95).toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MonthlySummary;
