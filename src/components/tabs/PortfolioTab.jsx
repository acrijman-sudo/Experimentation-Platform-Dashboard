import React, { useState, useMemo } from 'react';
import { Layers, Lightbulb } from 'lucide-react';
import StatusBadge from '../StatusBadge';
import HealthIndicator from '../HealthIndicator';
import { allExperiments } from '../../data/mockData';

const PortfolioTab = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [teamFilter, setTeamFilter] = useState('All');
  const [platformFilter, setPlatformFilter] = useState('All');

  // Filter experiments based on selected filters
  const filteredExperiments = useMemo(() => {
    return allExperiments.filter(exp => {
      const statusMatch = statusFilter === 'All' || exp.status === statusFilter;
      const teamMatch = teamFilter === 'All' || exp.team === teamFilter;
      const platformMatch = platformFilter === 'All' || exp.platform === platformFilter;
      return statusMatch && teamMatch && platformMatch;
    });
  }, [statusFilter, teamFilter, platformFilter]);

  // Get unique values for filters
  const uniqueStatuses = ['All', ...new Set(allExperiments.map(e => e.status))];
  const uniqueTeams = ['All', ...new Set(allExperiments.map(e => e.team))];
  const uniquePlatforms = ['All', ...new Set(allExperiments.map(e => e.platform))];

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Total Shown</p>
          <p className="text-2xl font-bold text-gray-900">{filteredExperiments.length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-2xl font-bold text-blue-600">{filteredExperiments.filter(e => e.status === 'Active').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Won</p>
          <p className="text-2xl font-bold text-emerald-600">{filteredExperiments.filter(e => e.status === 'Won').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Learnings</p>
          <p className="text-2xl font-bold text-yellow-600">{filteredExperiments.reduce((sum, e) => sum + (e.learnings || 0), 0)}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Needs Attention</p>
          <p className="text-2xl font-bold text-red-600">{filteredExperiments.filter(e => e.health === 'warning' || e.health === 'critical').length}</p>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Experiment Portfolio</h3>
            <div className="flex flex-wrap gap-3">
              <select 
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {uniqueStatuses.map(status => (
                  <option key={status} value={status}>{status === 'All' ? 'All Statuses' : status}</option>
                ))}
              </select>
              <select 
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={teamFilter}
                onChange={(e) => setTeamFilter(e.target.value)}
              >
                {uniqueTeams.map(team => (
                  <option key={team} value={team}>{team === 'All' ? 'All Teams' : team}</option>
                ))}
              </select>
              <select 
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={platformFilter}
                onChange={(e) => setPlatformFilter(e.target.value)}
              >
                {uniquePlatforms.map(platform => (
                  <option key={platform} value={platform}>{platform === 'All' ? 'All Platforms' : platform}</option>
                ))}
              </select>
              {(statusFilter !== 'All' || teamFilter !== 'All' || platformFilter !== 'All') && (
                <button 
                  onClick={() => { setStatusFilter('All'); setTeamFilter('All'); setPlatformFilter('All'); }}
                  className="px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experiment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lift</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learnings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variants</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredExperiments.length === 0 ? (
                <tr>
                  <td colSpan={11} className="px-6 py-12 text-center text-gray-500">
                    <Layers className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p className="font-medium">No experiments match your filters</p>
                    <p className="text-sm">Try adjusting your filter criteria</p>
                  </td>
                </tr>
              ) : (
                filteredExperiments.map((exp) => (
                  <tr key={exp.id} className="hover:bg-gray-50 cursor-pointer transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 hover:text-blue-600">{exp.name}</p>
                        <p className="text-xs text-gray-500">{exp.id}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{exp.team}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                        {exp.platform}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{exp.segment}</span>
                    </td>
                    <td className="px-6 py-4"><StatusBadge status={exp.status} /></td>
                    <td className="px-6 py-4"><HealthIndicator health={exp.health} /></td>
                    <td className="px-6 py-4">
                      {exp.lift ? (
                        <span className={`text-sm font-medium ${exp.lift.startsWith('+') && parseFloat(exp.lift) > 1 ? 'text-emerald-600' : exp.lift.startsWith('-') ? 'text-red-600' : 'text-gray-500'}`}>
                          {exp.lift}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {exp.learnings ? (
                        <div className="flex items-center gap-1">
                          <Lightbulb className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm font-medium text-gray-900">{exp.learnings}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{exp.duration}</td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{exp.variants}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{exp.startDate}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {filteredExperiments.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing {filteredExperiments.length} of {allExperiments.length} experiments
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded transition-colors">Previous</button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded transition-colors">Next</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioTab;
