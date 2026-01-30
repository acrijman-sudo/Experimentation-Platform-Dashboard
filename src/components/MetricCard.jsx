import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

// Blue Hero Card style (per PDF specification)
const MetricCard = ({ title, value, change, changeType, icon: Icon, subtitle, variant = 'blue' }) => {
  if (variant === 'blue') {
    return (
      <div className="bg-[#4169E1] rounded-xl p-6 shadow-md text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-blue-100 uppercase tracking-wide">{title}</p>
            <p className="text-4xl font-bold mt-2">{value}</p>
            {subtitle && <p className="text-sm text-blue-100 mt-1">{subtitle}</p>}
          </div>
          {Icon && (
            <div className="p-2 bg-white/20 rounded-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
        </div>
        {change && (
          <div className="flex items-center gap-1 mt-3 text-sm">
            {changeType === 'positive' && <ArrowUpRight className="w-4 h-4 text-emerald-300" />}
            {changeType === 'negative' && <ArrowDownRight className="w-4 h-4 text-red-300" />}
            {changeType === 'neutral' && <Minus className="w-4 h-4 text-blue-200" />}
            <span className={changeType === 'positive' ? 'text-emerald-300' : changeType === 'negative' ? 'text-red-300' : 'text-blue-200'}>
              {change}
            </span>
          </div>
        )}
      </div>
    );
  }

  // White card variant
  const changeColors = {
    positive: 'text-emerald-600 bg-emerald-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50'
  };
  
  const ChangeIcon = changeType === 'positive' ? ArrowUpRight : changeType === 'negative' ? ArrowDownRight : Minus;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
        </div>
        {Icon && (
          <div className="p-3 bg-blue-50 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        )}
      </div>
      {change && (
        <div className={`inline-flex items-center gap-1 mt-3 px-2 py-1 rounded-full text-xs font-medium ${changeColors[changeType]}`}>
          <ChangeIcon className="w-3 h-3" />
          {change}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
