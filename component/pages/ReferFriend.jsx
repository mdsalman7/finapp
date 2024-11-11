import React from 'react';
import { ArrowLeft, Copy } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ReferFriend = ({ onBack }) => {
  const referralCode = 'FINDASH2024';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    // Add toast notification here if you want
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <button className="p-2 rounded-lg hover:bg-gray-200 mr-4" onClick={onBack}>
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold">Refer a Friend</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Share FinDash with Friends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-600">
                Share FinDash with your friends and you'll both get a month of premium features for free!
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                <span className="font-mono text-lg">{referralCode}</span>
                <button
                  onClick={handleCopyCode}
                  className="p-2 hover:bg-gray-200 rounded-lg"
                >
                  <Copy className="h-5 w-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow">
                  <h3 className="font-bold mb-2">1. Share Code</h3>
                  <p className="text-sm text-gray-600">Share your unique referral code with friends</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h3 className="font-bold mb-2">2. Friend Signs Up</h3>
                  <p className="text-sm text-gray-600">They use your code during registration</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                  <h3 className="font-bold mb-2">3. Get Rewards</h3>
                  <p className="text-sm text-gray-600">You both get premium features free for a month</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReferFriend;