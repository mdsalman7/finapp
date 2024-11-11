import React from 'react';
import SearchBar from '../ui/SearchBar';
import UserMenu from '../ui/UserMenu';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">FinDash</div>
        <SearchBar />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;