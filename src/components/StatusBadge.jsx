import React from 'react';

const StatusBadge = ({ status }) => {
  const styles = {
    Active: 'bg-blue-100 text-blue-700',
    Won: 'bg-emerald-100 text-emerald-700',
    Lost: 'bg-red-100 text-red-700',
    Paused: 'bg-yellow-100 text-yellow-700',
    Scheduled: 'bg-purple-100 text-purple-700',
    Inconclusive: 'bg-gray-100 text-gray-700',
    'Rolled Out': 'bg-teal-100 text-teal-700',
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-gray-100 text-gray-700'}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
