import React from 'react';

const HealthIndicator = ({ health }) => {
  const styles = {
    healthy: { color: 'text-emerald-500', bg: 'bg-emerald-500' },
    warning: { color: 'text-yellow-500', bg: 'bg-yellow-500' },
    critical: { color: 'text-red-500', bg: 'bg-red-500' },
  };
  
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${styles[health].bg}`} />
      <span className={`text-xs capitalize ${styles[health].color}`}>{health}</span>
    </div>
  );
};

export default HealthIndicator;
