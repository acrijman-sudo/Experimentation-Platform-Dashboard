import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { Users, UserPlus, Activity, Lightbulb, Trophy, Target, CheckCircle } from 'lucide-react';
import MetricCard from '../MetricCard';
import { teamPerformance, segmentUsage, topPerformers, teamTestCoverage, experimentationRate, teamWorkload } from '../../data/mockData';

const TeamsTab = () => {
  return (
    <div className="space-y-8">
      {/* HERO CARDS - Team metrics with blue background */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Team Penetration Rate"
          value="75%"
          change="+18% vs last quarter"
          changeType="positive"
          icon={Users}
          subtitle="27/36 teams experimenting"
          variant="blue"
        />
        <MetricCard
          title="New Teams"
          value="2"
          change="+2 from last quarter"
          changeType="positive"
          icon={UserPlus}
          subtitle="This quarter"
          variant="blue"
        />
        <MetricCard
          title="Active Teams"
          value="27"
          change="+5 vs last quarter"
          changeType="positive"
          icon={Activity}
          subtitle="Running experiments"
          variant="blue"
        />
        <MetricCard
          title="Avg Experiments/Team"
          value="5.8"
          change="+1.2 vs last quarter"
          changeType="positive"
          icon={Activity}
          subtitle="Per active team"
          variant="blue"
        />
      </div>

      {/* EXPERIMENTATION RATE CARD */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-6 h-6" />
              <h3 className="text-lg font-semibold uppercase tracking-wide">Experimentation Rate</h3>
            </div>
            <p className="text-5xl font-bold mt-2">{experimentationRate.current}%</p>
            <p className="text-blue-100 mt-2">
              {experimentationRate.totalExperiments} experiments / {experimentationRate.totalUserFacingIssues} user-facing issues
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-300" />
                <span className="text-sm">+{experimentationRate.change}% vs Q3</span>
              </div>
              <div className="px-3 py-1 bg-white/20 rounded-full text-sm">
                Target: {experimentationRate.target}%
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-6xl font-bold opacity-20">🎯</div>
          </div>
        </div>
      </div>

      {/* TEAM PERFORMANCE COMPARISON TABLE with TEST COVERAGE */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Team Performance Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experiments</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User-Facing Issues</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Coverage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Lift</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {teamTestCoverage.map((team) => {
                const perfData = teamPerformance.find(t => t.team === team.team) || {};
                return (
                  <tr key={team.team} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-900">{team.team}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{team.experiments}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{team.userFacingIssues}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              team.testCoverage >= 50 ? 'bg-emerald-500' :
                              team.testCoverage >= 30 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${team.testCoverage}%` }}
                          />
                        </div>
                        <span className={`text-sm font-medium ${
                          team.testCoverage >= 50 ? 'text-emerald-600' :
                          team.testCoverage >= 30 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {team.testCoverage}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[#4169E1] h-2 rounded-full" 
                            style={{ width: `${perfData.winRate || 0}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{perfData.winRate || 0}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-emerald-600">+{perfData.avgLift || 0}%</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Lightbulb className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-900">{perfData.learnings || 0}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* TEST COVERAGE INSIGHTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Test Coverage by Team - Horizontal Bar Chart (2/3) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Test Coverage by Team</h3>
            <p className="text-sm text-gray-500">Percentage of user-facing work validated through experiments</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={teamTestCoverage} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
              <XAxis type="number" stroke="#9CA3AF" fontSize={12} domain={[0, 100]} unit="%" />
              <YAxis type="category" dataKey="team" stroke="#9CA3AF" fontSize={12} width={120} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="testCoverage" radius={[0, 4, 4, 0]} name="Test Coverage">
                {teamTestCoverage.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={
                      entry.testCoverage >= 50 ? '#10B981' :
                      entry.testCoverage >= 30 ? '#F59E0B' :
                      '#EF4444'
                    } 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-emerald-500" />
              <span className="text-gray-600">High (≥50%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-yellow-500" />
              <span className="text-gray-600">Medium (30-49%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-red-500" />
              <span className="text-gray-600">Low (&lt;30%)</span>
            </div>
            <div className="ml-auto text-gray-500">Org Avg: {experimentationRate.current}%</div>
          </div>
        </div>

        {/* Test Coverage Distribution - Donut (1/3) */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Coverage Distribution</h3>
            <p className="text-sm text-gray-500">Teams by coverage level</p>
          </div>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'High (≥50%)', value: teamTestCoverage.filter(t => t.testCoverage >= 50).length, color: '#10B981' },
                    { name: 'Medium (30-49%)', value: teamTestCoverage.filter(t => t.testCoverage >= 30 && t.testCoverage < 50).length, color: '#F59E0B' },
                    { name: 'Low (<30%)', value: teamTestCoverage.filter(t => t.testCoverage < 30).length, color: '#EF4444' },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {[
                    { color: '#10B981' },
                    { color: '#F59E0B' },
                    { color: '#EF4444' },
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-gray-600">High</span>
              </div>
              <span className="font-medium text-gray-900">
                {teamTestCoverage.filter(t => t.testCoverage >= 50).length} teams
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-gray-600">Medium</span>
              </div>
              <span className="font-medium text-gray-900">
                {teamTestCoverage.filter(t => t.testCoverage >= 30 && t.testCoverage < 50).length} teams
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-gray-600">Low</span>
              </div>
              <span className="font-medium text-gray-900">
                {teamTestCoverage.filter(t => t.testCoverage < 30).length} teams
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CURRENT TEAM WORKLOAD */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Current Team Workload</h3>
          </div>
          <p className="text-sm text-gray-500 mt-1">Real-time capacity and active experiments per team</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Active</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Scheduled</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Capacity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {teamWorkload.map((team) => (
                <tr key={team.team} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{team.team}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">{team.active}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">{team.scheduled}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      team.capacity === 'High' ? 'bg-red-100 text-red-700' :
                      team.capacity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {team.capacity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FEATURE USAGE - Horizontal Bar Chart (Purple bars per PDF) */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Segmentation Usage</h3>
          <p className="text-sm text-gray-500">How teams are leveraging targeting capabilities</p>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={segmentUsage} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
            <XAxis type="number" stroke="#9CA3AF" fontSize={12} domain={[0, 70]} />
            <YAxis type="category" dataKey="segment" stroke="#9CA3AF" fontSize={12} width={120} />
            <Tooltip />
            <Bar dataKey="count" fill="#8B5CF6" radius={[0, 4, 4, 0]} name="Experiments" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* TOP PERFORMERS - Card-based layout */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topPerformers.map((team) => (
            <div 
              key={team.rank} 
              className={`rounded-xl p-6 border ${
                team.rank === 1 ? 'bg-yellow-50 border-yellow-200' :
                team.rank === 2 ? 'bg-gray-50 border-gray-200' :
                'bg-orange-50 border-orange-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  team.rank === 1 ? 'bg-yellow-500' :
                  team.rank === 2 ? 'bg-gray-400' :
                  'bg-orange-400'
                }`}>
                  {team.rank}
                </div>
                <span className="text-lg font-semibold text-gray-900">{team.team}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Experiments</span>
                  <span className="text-sm font-medium text-gray-900">{team.experiments}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Win Rate</span>
                  <span className="text-sm font-medium text-emerald-600">{team.winRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Avg Lift</span>
                  <span className="text-sm font-medium text-emerald-600">+{team.avgLift}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTED AREA - Horizontal Bar Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Tested Area</h3>
          <p className="text-sm text-gray-500">Number of experiments that tested a specific area based on Exposure Event</p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart 
            data={[
              { area: 'Homepage', count: 42 },
              { area: 'Checkout', count: 35 },
              { area: 'Product Page', count: 28 },
              { area: 'Navigation', count: 22 },
              { area: 'Search', count: 18 },
              { area: 'Profile', count: 12 },
            ]} 
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
            <XAxis type="number" stroke="#9CA3AF" fontSize={12} domain={[0, 50]} />
            <YAxis type="category" dataKey="area" stroke="#9CA3AF" fontSize={12} width={100} />
            <Tooltip />
            <Bar dataKey="count" fill="#8B5CF6" radius={[0, 4, 4, 0]} name="Experiments" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TeamsTab;
