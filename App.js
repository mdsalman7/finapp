import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Card from './components/Card/Card';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import LineChart from './components/Chart/LineChart';
import PieChart from './components/Chart/PieChart';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Dashboard />
      <Card title="Revenue" value="$5000" />
      <DropdownMenu />
      <LineChart />
      <PieChart />
      <Footer />
    </div>
  );
}

export default App;
