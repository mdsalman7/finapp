import React from 'react';
import { ArrowLeft, Plus, CreditCard } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Wallet = ({ onBack }) => {
  const cards = [
    { type: 'Visa', last4: '4242', expiry: '12/24' },
    { type: 'Mastercard', last4: '8888', expiry: '06/25' },
  ];

  const transactions = [
    { id: 1, description: 'Netflix Subscription', amount: -14.99, date: '2024-03-15' },
    { id: 2, description: 'Salary Deposit', amount: 5000.00, date: '2024-03-14' },
    { id: 3, description: 'Grocery Store', amount: -127.35, date: '2024-03-13' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <button className="p-2 rounded-lg hover:bg-gray-200 mr-4" onClick={onBack}>
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold">Wallet</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cards.map((card) => (
                  <div key={card.last4} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center">
                      <CreditCard className="h-6 w-6 mr-4" />
                      <div>
                        <p className="font-medium">{card.type} •••• {card.last4}</p>
                        <p className="text-sm text-gray-600">Expires {card.expiry}</p>
                      </div>
                    </div>
                    <button className="text-red-600 text-sm">Remove</button>
                  </div>
                ))}
                
                <button className="flex items-center justify-center w-full p-4 border-2 border-dashed rounded-lg hover:bg-gray-50">
                  <Plus className="h-5 w-5 mr-2" />
                  Add New Card
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 border-b">
                    <div>
                      <p className="font-medium">{tx.description}</p>
                      <p className="text-sm text-gray-600">{tx.date}</p>
                    </div>
                    <p className={`font-medium ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${Math.abs(tx.amount).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
