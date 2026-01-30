import React from 'react';

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
      active 
        ? 'bg-blue-600 text-white' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

export default TabButton;
