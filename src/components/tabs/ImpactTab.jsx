import React from 'react';
import { DollarSign, Users, ArrowUpRight, Clock, Lightbulb, CheckCircle } from 'lucide-react';
import MetricCard from '../MetricCard';
import { topWinningExperiments, activeRollouts } from '../../data/mockData';

const ImpactTab = () => {
  return (
    <div className="space-y-8">
      {/* HERO CARDS - Large impact metrics with blue background */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* REVENUE INFLUENCED */}
        <div className="bg-gradient-to-r from-[#4169E1] to-[#5B7FE1] rounded-xl p-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium uppercase tracking-wide">Revenue Influenced</p>
              <p className="text-5xl font-bold mt-2">$2.4M</p>
              <p className="text-blue-100 mt-2">From winning experiments</p>
            </div>
            <div className="p-3 bg-white/20 rounded-lg">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <ArrowUpRight className="w-5 h-5 text-emerald-300" />
            <span className="text-emerald-300 font-medium">+18% vs last quarter</span>
          </div>
        </div>

        {/* USERS IMPACTED */}
        <div className="bg-gradient-to-r from-[#4169E1] to-[#5B7FE1] rounded-xl p-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium uppercase tracking-wide">Users Impacted</p>
              <p className="text-5xl font-bold mt-2">4.2M</p>
              <p className="text-blue-100 mt-2">Active users from experiments</p>
            </div>
            <div className="p-3 bg-white/20 rounded-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <ArrowUpRight className="w-5 h-5 text-emerald-300" />
            <span className="text-emerald-300 font-medium">+12% vs last quarter</span>
          </div>
        </div>
      </div>

      {/* Additional Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Cumulative Lift"
          value="+4.2%"
          change="From winning experiments"
          changeType="positive"
          icon={ArrowUpRight}
          subtitle="Conversion rate impact"
          variant="blue"
        />
        <MetricCard
          title="Influenced MAU"
          value="2.8M"
          change="+15% vs last quarter"
          changeType="positive"
          icon={Users}
          subtitle="From winning experiments"
          variant="blue"
        />
        <MetricCard
          title="Experiments Rolled Out"
          value="28"
          change="Via PFR & ABC"
          changeType="positive"
          icon={CheckCircle}
          subtitle="Successfully shipped"
          variant="blue"
        />
        <MetricCard
          title="Time to Rollout"
          value="4.2 days"
          change="-1.8 days vs Q3"
          changeType="positive"
          icon={Clock}
          subtitle="From conclusion to production"
          variant="blue"
        />
      </div>

      {/* TOP WINNING EXPERIMENTS TABLE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Top Winning Experiments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lift</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {topWinningExperiments.map((exp, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{exp.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{exp.team}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-emerald-600">{exp.lift}</span>
                  </td>
                  <td className="px-6 py-4">
                    {exp.hasLearning ? (
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <span className="text-sm text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ACTIVE ROLLOUTS FROM EXPERIMENTS - Progress Bars */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Active Rollouts from Experiments</h3>
          <p className="text-sm text-gray-500">Feature rollouts and audience-based configurations</p>
        </div>
        <div className="divide-y divide-gray-100">
          {activeRollouts.map((rollout, index) => (
            <div key={index} className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-900">{rollout.name}</span>
                  <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded">
                    {rollout.type}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{rollout.users} users</span>
                  <span className="text-sm font-bold text-gray-900">{rollout.percentage}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-[#4169E1] h-3 rounded-full transition-all duration-500"
                  style={{ width: `${rollout.percentage}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">Started: {rollout.startDate}</p>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All Rollouts →
          </button>
        </div>
      </div>

      {/* Rollout Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
          <h4 className="text-sm font-medium text-emerald-800 mb-2">Rollout Success Rate</h4>
          <p className="text-3xl font-bold text-emerald-900">94%</p>
          <p className="text-sm text-emerald-700 mt-1">From winning experiments</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h4 className="text-sm font-medium text-blue-800 mb-2">Avg. Rollout Duration</h4>
          <p className="text-3xl font-bold text-blue-900">3.2 days</p>
          <p className="text-sm text-blue-700 mt-1">From 0% to 100%</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
          <h4 className="text-sm font-medium text-purple-800 mb-2">Pending Rollouts</h4>
          <p className="text-3xl font-bold text-purple-900">7</p>
          <p className="text-sm text-purple-700 mt-1">Waiting for approval</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactTab;
