import React from 'react';
import { Home, PieChart, CreditCard, Settings, HelpCircle } from 'lucide-react';

const Navigation = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: PieChart },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <nav className="bg-white border-r border-gray-200 h-full w-64 fixed left-0 top-0 p-4">
      <div className="flex flex-col space-y-6">
        <div className="text-2xl font-bold">FinDash</div>
        
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-100 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-auto pt-6 border-t border-gray-200">
          <div className="flex items-center space-x-3 p-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full">
              <img
                src="/api/placeholder/40/40"
                alt="Profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-600">Premium User</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;