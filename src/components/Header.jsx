import React from 'react';
import { Calendar, Filter, ChevronDown } from 'lucide-react';
import TabButton from './TabButton';

const Header = ({ activeTab, setActiveTab, timeRange }) => {
  const tabs = [
    { id: 'status', label: 'Control Center' },
    { id: 'overview', label: 'Platform Overview' },
    { id: 'velocity', label: 'Process Efficiency' },
    { id: 'teams', label: 'Team Adoption & Performance' },
    { id: 'learnings', label: 'Knowledge Repository' },
    { id: 'quality', label: 'Platform Health' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Experimentation Platform</h1>
            <p className="text-sm text-gray-500">Analytics & Reporting Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Calendar className="w-4 h-4" />
              {timeRange}
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
