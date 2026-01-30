import React from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { Activity, CheckCircle, Users, Lightbulb, TrendingUp, Target, Zap, Clock } from 'lucide-react';
import MetricCard from '../MetricCard';
import { 
  monthlyData, 
  outcomeDistribution, 
  experimentTypeDistribution, 
  platformDistribution, 
  experimentationRate,
  businessImpact,
  activeRollouts 
} from '../../data/mockData';

const OverviewTab = () => {
  return (
    <div className="space-y-8">
      {/* HERO CARDS - 6 key metrics (2 rows of 3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="Total Experiments"
          value="156"
          change="+12% vs last quarter"
          changeType="positive"
          icon={Activity}
          subtitle="Active + Archived"
          variant="blue"
        />
        <MetricCard
          title="Win Rate"
          value="54%"
          change="+5% vs Q3"
          changeType="positive"
          icon={CheckCircle}
          subtitle="Statistical significance"
          variant="blue"
        />
        <MetricCard
          title="Experimentation Rate"
          value={`${experimentationRate.current}%`}
          change={`+${experimentationRate.change}% vs Q3`}
          changeType="positive"
          icon={Target}
          subtitle={`${experimentationRate.totalExperiments}/${experimentationRate.totalUserFacingIssues} user-facing work tested`}
          variant="blue"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="Active Teams"
          value="27"
          change="+2 new teams"
          changeType="positive"
          icon={Users}
          subtitle="Active this quarter"
          variant="blue"
        />
        <MetricCard
          title="Learnings Captured"
          value="38"
          change="+6 this quarter"
          changeType="positive"
          icon={Lightbulb}
          subtitle="From all experiments"
          variant="blue"
        />
        <MetricCard
          title="Invalid Rate"
          value="2.3%"
          change="-0.4% vs last quarter"
          changeType="positive"
          icon={Activity}
          subtitle="Quality control"
          variant="blue"
        />
      </div>

      {/* SECTION 1: PROGRAM HEALTH (2 columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* EXPERIMENT VELOCITY - Line Chart (2/3 width) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Experiment Velocity</h3>
            <p className="text-sm text-gray-500">Monthly experiment creation, completion, and win trends</p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }} 
              />
              <Legend />
              <Line type="monotone" dataKey="jiraCreated" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} name="JIRA Experiments Created" />
              <Line type="monotone" dataKey="hzCreated" stroke="#4169E1" strokeWidth={2} dot={{ r: 4 }} name="HZ Experiments Created" />
              <Line type="monotone" dataKey="hzCompleted" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} name="HZ Experiments Completed" />
              <Line type="monotone" dataKey="hzWin" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} name="HZ Experiments Win" />
              <Line type="monotone" dataKey="jiraRollout" stroke="#EC4899" strokeWidth={2} dot={{ r: 4 }} name="JIRA Experiments Rollout" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* OUTCOME DISTRIBUTION - Donut Chart (1/3 width) */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Outcome Distribution</h3>
            <p className="text-sm text-gray-500">Concluded experiments</p>
          </div>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={outcomeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={85}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ value }) => `${value}%`}
                >
                  {outcomeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {outcomeDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-gray-600">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: COVERAGE & ADOPTION (2 columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SURFACE COVERAGE - Horizontal Bar Chart (2/3 width) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Surface Coverage</h3>
            <p className="text-sm text-gray-500">Where experiments are reaching users across platforms</p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={platformDistribution} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
              <XAxis type="number" stroke="#9CA3AF" fontSize={12} domain={[0, 70]} unit="%" />
              <YAxis type="category" dataKey="name" stroke="#9CA3AF" fontSize={11} width={140} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="value" fill="#4169E1" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* EXPERIMENTS TYPE - Donut Chart (1/3 width) */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Experiments Type</h3>
            <p className="text-sm text-gray-500">Distribution by type</p>
          </div>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={experimentTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={85}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ value }) => `${value}%`}
                >
                  {experimentTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {experimentTypeDistribution.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-gray-600">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: BUSINESS IMPACT */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900">Business Impact</h3>
          <p className="text-sm text-gray-500">Value delivered through experimentation program</p>
        </div>

        {/* Row 1: EXPERIMENT RESULTS */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Experiment Results</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-5 border border-emerald-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-emerald-900 uppercase">Avg Lift</p>
                  <p className="text-3xl font-bold text-emerald-700 mt-1">{businessImpact.avgLift.value}</p>
                </div>
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-xs text-emerald-700 flex items-center gap-1">
                <span className="font-medium">{businessImpact.avgLift.change}</span> vs Q3
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-blue-900 uppercase">Users Impacted</p>
                  <p className="text-3xl font-bold text-blue-700 mt-1">{businessImpact.usersImpacted.value}</p>
                </div>
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xs text-blue-700 flex items-center gap-1">
                <span className="font-medium">{businessImpact.usersImpacted.change}</span> vs Q3
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-purple-900 uppercase">Archived Experiments</p>
                  <p className="text-3xl font-bold text-purple-700 mt-1">{businessImpact.archivedExperiments.value}</p>
                </div>
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-xs text-purple-700">
                {businessImpact.archivedExperiments.percentage} completed • +{businessImpact.archivedExperiments.change} vs Q3
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: ROLLOUT IMPACT */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Rollout Impact</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-5 border border-indigo-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-indigo-900 uppercase">Influenced MAU</p>
                  <p className="text-3xl font-bold text-indigo-700 mt-1">{businessImpact.influencedMAU.value}</p>
                </div>
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <p className="text-xs text-indigo-700">
                {businessImpact.influencedMAU.percentage} of total MAU • {businessImpact.influencedMAU.change} vs Q3
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-5 border border-amber-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-amber-900 uppercase">Experiments Rolled Out</p>
                  <p className="text-3xl font-bold text-amber-700 mt-1">{businessImpact.experimentsRolledOut.value}</p>
                </div>
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-xs text-amber-700 flex items-center gap-1">
                <span className="font-medium">{businessImpact.experimentsRolledOut.change}</span> vs Q3
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-5 border border-teal-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-teal-900 uppercase">Avg Time to Rollout</p>
                  <p className="text-3xl font-bold text-teal-700 mt-1">{businessImpact.avgTimeToRollout.value}</p>
                </div>
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <p className="text-xs text-teal-700 flex items-center gap-1">
                <span className="font-medium">{businessImpact.avgTimeToRollout.change}</span> faster
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: ACTIVE ROLLOUTS TABLE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Active Rollouts from Experiments</h3>
              <p className="text-sm text-gray-500">Features currently being deployed to production</p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experiment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users Reached</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activeRollouts.map((rollout, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">{rollout.name}</p>
                    <p className="text-xs text-gray-500">{rollout.type}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{rollout.team}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{rollout.startDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[120px]">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${rollout.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{rollout.percentage}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{rollout.users}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-emerald-600">{rollout.impact}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
