import React, { useState } from 'react';
import { Calendar, Filter, ChevronDown, X } from 'lucide-react';
import TabButton from './TabButton';

const Header = ({ activeTab, setActiveTab, timeRange, setTimeRange, filters, setFilters }) => {
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const tabs = [
    { id: 'status', label: 'Control Center' },
    { id: 'overview', label: 'Platform Overview' },
    { id: 'velocity', label: 'Process Efficiency' },
    { id: 'teams', label: 'Team & Platform Adoption' },
    { id: 'learnings', label: '[WIP] Knowledge Repository' },
    { id: 'quality', label: '[WIP] Platform Health' },
  ];

  const timeRangeOptions = [
    { id: 'FY Q1', label: 'FY Q1 (Dec 2025-Feb 2026)' },
    { id: 'FY Q2', label: 'FY Q2 (Mar-May 2026)' },
    { id: 'FY Q3', label: 'FY Q3 (Jun-Aug 2026)' },
    { id: 'FY Q4', label: 'FY Q4 (Sep-Nov 2026)' },
    { id: 'YTD', label: 'YTD (Year to Date)' },
    { id: '2025', label: '2025 (Full Year)' },
  ];

  const availableTeams = [
    'Growth',
    'Mobile Native',
    'Onboarding',
    'Monetization',
    'Education',
    'Squirrel',
    'Commerce',
    'Analytics',
  ];

  const teamCategories = ['All', 'PLG', 'Feature Team'];
  const tenants = ['All', 'Project X', 'Squirrel', 'Aura', 'Quick Actions'];

  const handleTimeRangeSelect = (option) => {
    setTimeRange(option.id);
    setIsTimeDropdownOpen(false);
  };

  const handleTeamToggle = (team) => {
    const newTeams = filters.teams.includes(team)
      ? filters.teams.filter(t => t !== team)
      : [...filters.teams, team];
    setFilters({ ...filters, teams: newTeams });
  };

  const handleCategoryChange = (category) => {
    setFilters({ ...filters, teamCategory: category });
  };

  const handleTenantChange = (tenant) => {
    setFilters({ ...filters, tenant });
  };

  const clearFilters = () => {
    setFilters({
      teams: [],
      teamCategory: 'All',
      tenant: 'All',
    });
  };

  const activeFiltersCount = 
    filters.teams.length + 
    (filters.teamCategory !== 'All' ? 1 : 0) + 
    (filters.tenant !== 'All' ? 1 : 0);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Experimentation Platform</h1>
            <p className="text-sm text-gray-500">Analytics & Reporting Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button 
                onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Calendar className="w-4 h-4" />
                {timeRangeOptions.find(opt => opt.id === timeRange)?.label || timeRange}
                <ChevronDown className="w-4 h-4" />
              </button>
              {isTimeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {timeRangeOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleTimeRangeSelect(option)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                        timeRange === option.id ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 relative"
              >
                <Filter className="w-4 h-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
              {isFiltersOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-gray-900">Filters</h3>
                      <button 
                        onClick={() => setIsFiltersOpen(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Teams Multi-Select */}
                    <div className="mb-4">
                      <label className="block text-xs font-medium text-gray-700 mb-2">Teams</label>
                      <div className="max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-2 space-y-1">
                        {availableTeams.map((team) => (
                          <label key={team} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer">
                            <input
                              type="checkbox"
                              checked={filters.teams.includes(team)}
                              onChange={() => handleTeamToggle(team)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{team}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Team Category */}
                    <div className="mb-4">
                      <label className="block text-xs font-medium text-gray-700 mb-2">Team Category</label>
                      <div className="space-y-1">
                        {teamCategories.map((category) => (
                          <label key={category} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer">
                            <input
                              type="radio"
                              name="teamCategory"
                              checked={filters.teamCategory === category}
                              onChange={() => handleCategoryChange(category)}
                              className="border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Tenant */}
                    <div className="mb-4">
                      <label className="block text-xs font-medium text-gray-700 mb-2">Tenant</label>
                      <select
                        value={filters.tenant}
                        onChange={(e) => handleTenantChange(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {tenants.map((tenant) => (
                          <option key={tenant} value={tenant}>
                            {tenant}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Clear Filters Button */}
                    {activeFiltersCount > 0 && (
                      <button
                        onClick={clearFilters}
                        className="w-full px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
                      >
                        Clear All Filters
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
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
