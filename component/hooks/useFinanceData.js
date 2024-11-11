import { useState } from 'react';
import { monthlyData } from '../data/mockData';

export const useFinanceData = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const currentMonth = monthlyData[monthlyData.length - 1];

  return {
    monthlyData,
    currentMonth,
    selectedCategory,
    setSelectedCategory,
  };
};