import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import MonthlyBreakdown from './components/dashboard/MonthlyBreakdown';
import MonthlySummary from './components/dashboard/MonthlySummary';
import ProfileSettings from './components/pages/ProfileSettings';
import Header from './components/layout/Header';
import MonthlyTrends from './components/dashboard/MonthlyTrends';
import MonthlyBreakdown from './components/dashboard/MonthlyBreakdown';
import MonthlySummary from './components/dashboard/MonthlySummary';
import ProfileSettings from './components/pages/ProfileSettings';
import Wallet from './components/pages/Wallet';
import HelpSupport from './components/pages/HelpSupport';
import ReferFriend from './components/pages/ReferFriend';
import { useFinanceData } from './hooks/useFinanceData';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const { monthlyData, currentMonth, selectedCategory, setSelectedCategory } = useFinanceData();

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <ProfileSettings onBack={() => setCurrentPage('dashboard')} />;
      case 'wallet':
        return <Wallet onBack={() => setCurrentPage('dashboard')} />;
      case 'help':
        return <HelpSupport onBack={() => setCurrentPage('dashboard')} />;
      case 'refer':
        return <ReferFriend onBack={() => setCurrentPage('dashboard')} />;
      default:
        return (
          <main className="w-full max-w-6xl mx-auto p-4 space-y-4">
            <h1 className="text-2xl font-bold mb-6">Financial Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MonthlyTrends data={monthlyData} />
              <MonthlyBreakdown data={currentMonth} />
              <MonthlySummary 
                data={currentMonth} 
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;