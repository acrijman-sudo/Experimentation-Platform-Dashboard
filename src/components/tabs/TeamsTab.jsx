import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Users, UserPlus, Activity, Lightbulb, Trophy, Target, CheckCircle, MoreVertical, X } from 'lucide-react';
import MetricCard from '../MetricCard';
import { segmentUsage, featureUsage, productAreaUsage, surfaceAreaUsage, experimentationRate, teamSpecificUsage, getDataForPeriod } from '../../data/mockData';

const TeamsTab = ({ timeRange = 'FY Q2', filters = { teams: [], teamCategory: 'All', tenant: 'All' } }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedTeamForCharts, setSelectedTeamForCharts] = useState(null);
  
  // Get period-adjusted and filtered data
  const periodData = getDataForPeriod(timeRange, filters);
  const teamPerformance = periodData.teamPerformance;
  const topPerformers = periodData.topPerformers;
  const metrics = periodData.metrics;

  // Get data based on selected team or show all
  const getDisplayData = () => {
    if (selectedTeamForCharts && teamSpecificUsage[selectedTeamForCharts]) {
      return teamSpecificUsage[selectedTeamForCharts];
    }
    return {
      segmentation: segmentUsage,
      features: featureUsage,
      productArea: productAreaUsage,
      surfaceArea: surfaceAreaUsage,
    };
  };

  const displayData = getDisplayData();

  return (
    <div className="space-y-8 relative">
      {/* HERO SECTION - Hero Cards + Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* LEFT: HERO CARDS - Team metrics (60%) */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MetricCard
              title="Avg Experiments/Team"
              value={metrics.avgExperimentsPerTeam.toString()}
              change="+1.2 vs last quarter"
              changeType="positive"
              icon={Activity}
              subtitle="Per active team"
              variant="blue"
            />
            <MetricCard
              title="Active Teams"
              value={metrics.activeTeams.toString()}
              change="+5 vs last quarter"
              changeType="positive"
              icon={Activity}
              subtitle={`${metrics.newTeams} New / ${metrics.activeTeams - metrics.newTeams} Returning`}
              variant="blue"
            />
            <MetricCard
              title="Team Penetration Rate"
              value={`${metrics.teamPenetration}%`}
              change="+18% vs last quarter"
              changeType="positive"
              icon={Users}
              subtitle={`${metrics.activeTeams}/36 teams experimenting`}
              variant="blue"
            />
            <MetricCard
              title="Experimentation Rate"
              value={`${metrics.experimentationRate}%`}
              change={`+${experimentationRate.change}% vs last quarter`}
              changeType="positive"
              icon={Target}
              subtitle={`${experimentationRate.totalExperiments} / ${experimentationRate.totalUserFacingIssues} user-facing issues`}
              variant="blue"
            />
            <MetricCard
              title="Top Segmentation Used"
              value={segmentUsage[0].segment}
              change={`${segmentUsage[0].count} experiments`}
              changeType="positive"
              icon={Target}
              subtitle={`${segmentUsage[0].percentage}% usage rate`}
              variant="blue"
            />
            <MetricCard
              title="Top Feature Used"
              value={featureUsage[0].feature}
              change={`${featureUsage[0].count} experiments`}
              changeType="positive"
              icon={Activity}
              subtitle={`${featureUsage[0].percentage}% usage rate`}
              variant="blue"
            />
          </div>
        </div>

        {/* RIGHT: TOP PERFORMERS (40%) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
          </div>
          <div className="space-y-3">
            {topPerformers.length > 0 ? (
              topPerformers.map((team) => (
                <div 
                  key={team.rank} 
                  className={`rounded-lg p-4 border flex items-center gap-4 ${
                    team.rank === 1 ? 'bg-yellow-50 border-yellow-200' :
                    team.rank === 2 ? 'bg-gray-50 border-gray-200' :
                    team.rank === 3 ? 'bg-orange-50 border-orange-200' :
                    'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${
                    team.rank === 1 ? 'bg-yellow-500' :
                    team.rank === 2 ? 'bg-gray-400' :
                    team.rank === 3 ? 'bg-orange-400' :
                    'bg-blue-500'
                  }`}>
                    {team.rank}
                  </div>
                  <div className="flex-1">
                    <span className="text-base font-semibold text-gray-900">{team.team}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Experiments</p>
                      <p className="text-lg font-bold text-gray-900">{team.experiments}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Win Rate</p>
                      <p className="text-lg font-bold text-emerald-600">{team.winRate}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Avg Lift</p>
                      <p className="text-lg font-bold text-emerald-600">+{team.avgLift}%</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p className="text-sm">No teams match the current filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TEAM PERFORMANCE TABLE */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Team Performance</h3>
          {selectedTeamForCharts && (
            <button
              onClick={() => setSelectedTeamForCharts(null)}
              className="px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-blue-200"
            >
              Clear Filter
            </button>
          )}
        </div>
        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experiments</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experimentation Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Lift</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learnings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {teamPerformance.length > 0 ? teamPerformance.map((team) => (
                <tr 
                  key={team.team} 
                  onClick={() => setSelectedTeamForCharts(team.team)}
                  className={`cursor-pointer transition-colors ${
                    selectedTeamForCharts === team.team 
                      ? 'bg-blue-50 hover:bg-blue-100' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">{team.team}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{team.experiments}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            team.experimentationRate >= 50 ? 'bg-emerald-500' :
                            team.experimentationRate >= 30 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${team.experimentationRate}%` }}
                        />
                      </div>
                      <span className={`text-sm font-medium ${
                        team.experimentationRate >= 50 ? 'text-emerald-600' :
                        team.experimentationRate >= 30 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {team.experimentationRate}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#4169E1] h-2 rounded-full" 
                          style={{ width: `${team.winRate}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{team.winRate}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-emerald-600">+{team.avgLift}%</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-900">{team.learnings}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      team.teamType === 'New' ? 'bg-blue-100 text-blue-700' :
                      team.teamType === 'Returning' ? 'bg-green-100 text-green-700' :
                      team.teamType === 'Churned' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {team.teamType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTeam(team);
                      }}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                      title="View details"
                    >
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="8" className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      <p className="text-sm font-medium">No teams match the current filters</p>
                      <p className="text-xs mt-1">Try adjusting your filter criteria</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* SIDE PANEL - Team Details */}
      {selectedTeam && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setSelectedTeam(null)}
          />
          
          {/* Side Panel */}
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedTeam.team}</h2>
                  <p className="text-sm text-gray-500 mt-1">Team Details</p>
                </div>
                <button
                  onClick={() => setSelectedTeam(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Team Type Badge */}
              <div className="mb-6">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  selectedTeam.teamType === 'New' ? 'bg-blue-100 text-blue-700' :
                  selectedTeam.teamType === 'Returning' ? 'bg-green-100 text-green-700' :
                  selectedTeam.teamType === 'Churned' ? 'bg-red-100 text-red-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {selectedTeam.teamType} Team
                </span>
              </div>

              {/* Key Metrics */}
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">Experiments</p>
                  <p className="text-2xl font-bold text-blue-900 mt-1">{selectedTeam.experiments}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-600 font-medium">Win Rate</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">{selectedTeam.winRate}%</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-600 font-medium">Avg. Lift</p>
                    <p className="text-xl font-bold text-emerald-600 mt-1">+{selectedTeam.avgLift}%</p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-xs text-yellow-700 font-medium">Learnings Captured</p>
                  <p className="text-2xl font-bold text-yellow-900 mt-1">{selectedTeam.learnings}</p>
                </div>
              </div>

              {/* Platform Usage Details */}
              {teamSpecificUsage[selectedTeam.team] ? (
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Platform Usage</h3>
                  
                  {/* Top Segmentation */}
                  {teamSpecificUsage[selectedTeam.team].segmentation[0] && (
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Top Segmentation</p>
                      <p className="text-lg font-bold text-gray-900">{teamSpecificUsage[selectedTeam.team].segmentation[0].segment}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {teamSpecificUsage[selectedTeam.team].segmentation[0].count} experiments • {teamSpecificUsage[selectedTeam.team].segmentation[0].percentage}% usage
                      </p>
                    </div>
                  )}

                  {/* Top Feature */}
                  {teamSpecificUsage[selectedTeam.team].features[0] && (
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Top Feature</p>
                      <p className="text-lg font-bold text-gray-900">{teamSpecificUsage[selectedTeam.team].features[0].feature}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {teamSpecificUsage[selectedTeam.team].features[0].count} experiments • {teamSpecificUsage[selectedTeam.team].features[0].percentage}% usage
                      </p>
                    </div>
                  )}

                  {/* Top Exposure Event */}
                  {teamSpecificUsage[selectedTeam.team].productArea[0] && (
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Top Exposure Event</p>
                      <p className="text-lg font-bold text-gray-900">{teamSpecificUsage[selectedTeam.team].productArea[0].area}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {teamSpecificUsage[selectedTeam.team].productArea[0].count} experiments • {teamSpecificUsage[selectedTeam.team].productArea[0].percentage}% usage
                      </p>
                    </div>
                  )}

                  {/* Top Surface Area */}
                  {teamSpecificUsage[selectedTeam.team].surfaceArea[0] && (
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Top Surface Area</p>
                      <p className="text-lg font-bold text-gray-900">{teamSpecificUsage[selectedTeam.team].surfaceArea[0].surface}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {teamSpecificUsage[selectedTeam.team].surfaceArea[0].count} experiments • {teamSpecificUsage[selectedTeam.team].surfaceArea[0].percentage}% coverage
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">No detailed usage data available for this team</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* PLATFORM USAGE CHARTS - 2x2 Grid */}
      <div className="space-y-6">
        {selectedTeamForCharts && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Filtered by Team</p>
                <p className="text-lg font-bold text-blue-900">{selectedTeamForCharts}</p>
              </div>
              <button
                onClick={() => setSelectedTeamForCharts(null)}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
              >
                View All Teams
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Segmentation Usage */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Segmentation Usage</h3>
              <p className="text-sm text-gray-500 mt-1">
                {selectedTeamForCharts 
                  ? `${selectedTeamForCharts} team targeting capabilities`
                  : 'How teams are leveraging targeting capabilities'
                }
              </p>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={displayData.segmentation} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
                <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
                <YAxis type="category" dataKey="segment" stroke="#9CA3AF" fontSize={12} width={140} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'count' ? `${value} experiments` : `${value}%`,
                    name === 'count' ? 'Experiments' : 'Usage'
                  ]}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #E5E7EB', 
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="count" fill="#4169E1" radius={[0, 4, 4, 0]} name="Experiments" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

          {/* Feature Usage */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Feature Usage</h3>
              <p className="text-sm text-gray-500 mt-1">
                {selectedTeamForCharts 
                  ? `${selectedTeamForCharts} team platform features`
                  : 'Platform features utilized by teams'
                }
              </p>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={displayData.features} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
                <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
                <YAxis type="category" dataKey="feature" stroke="#9CA3AF" fontSize={12} width={160} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'count' ? `${value} experiments` : `${value}%`,
                    name === 'count' ? 'Experiments' : 'Usage'
                  ]}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #E5E7EB', 
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="count" fill="#8B5CF6" radius={[0, 4, 4, 0]} name="Experiments" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

          {/* Product Area (Exposure Events) */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Exposure Events</h3>
              <p className="text-sm text-gray-500 mt-1">
                {selectedTeamForCharts 
                  ? `${selectedTeamForCharts} team exposure events`
                  : 'Experiments by exposure event'
                }
              </p>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={displayData.productArea} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
                <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
                <YAxis type="category" dataKey="area" stroke="#9CA3AF" fontSize={12} width={120} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'count' ? `${value} experiments` : `${value}%`,
                    name === 'count' ? 'Experiments' : 'Coverage'
                  ]}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #E5E7EB', 
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="count" fill="#F59E0B" radius={[0, 4, 4, 0]} name="Experiments" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

          {/* Surface Area */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Surface Area</h3>
              <p className="text-sm text-gray-500 mt-1">
                {selectedTeamForCharts 
                  ? `${selectedTeamForCharts} team platform surfaces`
                  : 'Experiments by platform surface'
                }
              </p>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={displayData.surfaceArea} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
                <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
                <YAxis type="category" dataKey="surface" stroke="#9CA3AF" fontSize={12} width={140} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'count' ? `${value} experiments` : `${value}%`,
                    name === 'count' ? 'Experiments' : 'Coverage'
                  ]}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #E5E7EB', 
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="count" fill="#14B8A6" radius={[0, 4, 4, 0]} name="Experiments" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsTab;
