import React, { useState } from 'react';
import Header from './components/Header';
import StatusTab from './components/tabs/StatusTab';
import OverviewTab from './components/tabs/OverviewTab';
import VelocityTab from './components/tabs/VelocityTab';
import TeamsTab from './components/tabs/TeamsTab';
import QualityTab from './components/tabs/QualityTab';
import LearningsTab from './components/tabs/LearningsTab';

function App() {
  const [activeTab, setActiveTab] = useState('status');
  const [timeRange, setTimeRange] = useState('FY Q2');
  const [filters, setFilters] = useState({
    teams: [],
    teamCategory: 'All',
    tenant: 'All',
  });

  const renderTab = () => {
    switch (activeTab) {
      case 'status':
        return <StatusTab timeRange={timeRange} filters={filters} />;
      case 'overview':
        return <OverviewTab timeRange={timeRange} filters={filters} />;
      case 'velocity':
        return <VelocityTab timeRange={timeRange} filters={filters} />;
      case 'teams':
        return <TeamsTab timeRange={timeRange} filters={filters} />;
      case 'learnings':
        return <LearningsTab timeRange={timeRange} filters={filters} />;
      case 'quality':
        return <QualityTab timeRange={timeRange} filters={filters} />;
      default:
        return <StatusTab timeRange={timeRange} filters={filters} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        filters={filters}
        setFilters={setFilters}
      />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderTab()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-8">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-500 text-center">
            Experimentation Platform Dashboard • Horizon • Last updated: Jan 19, 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
