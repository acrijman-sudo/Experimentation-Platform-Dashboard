import React from 'react';
import { Lightbulb, BookOpen, BarChart3 } from 'lucide-react';
import MetricCard from '../MetricCard';
import { learningCategories, recentLearnings, learningsData } from '../../data/mockData';

const LearningsTab = ({ timeRange = 'FY Q2', filters = { teams: [], teamCategory: 'All', tenant: 'All' } }) => {
  return (
    <div className="space-y-8">
      {/* HERO CARDS - Learnings metrics with blue background */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Learnings Captured"
          value="18"
          change="+6 this quarter"
          changeType="positive"
          icon={Lightbulb}
          subtitle="From 26 experiments"
          variant="blue"
        />
        <MetricCard
          title="Learnings from Losses"
          value="7"
          change="39% of total"
          changeType="neutral"
          icon={BookOpen}
          subtitle="From failed experiments"
          variant="blue"
        />
        <MetricCard
          title="Learnings from Flat"
          value="2"
          change="11% of total"
          changeType="neutral"
          icon={BarChart3}
          subtitle="From inconclusive experiments"
          variant="blue"
        />
        <MetricCard
          title="Learning Capture Rate"
          value="82%"
          change="+12% vs last quarter"
          changeType="positive"
          icon={Lightbulb}
          subtitle="Experiments with learnings"
          variant="blue"
        />
      </div>

      {/* TOP LEARNING CATEGORIES - Tag-based display */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Learning Categories</h3>
        <div className="flex flex-wrap gap-3">
          {learningCategories.map((category) => (
            <div 
              key={category.name} 
              className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full"
            >
              <span className="text-sm font-medium text-purple-800">{category.name}</span>
              <span className="text-xs font-bold text-purple-600 bg-purple-200 px-2 py-0.5 rounded-full">
                {category.count}
              </span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">Section: Recent Insights</p>
      </div>

      {/* RECENT LEARNING CARDS */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Learning Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentLearnings.map((learning, index) => (
            <div 
              key={learning.id} 
              className="p-5 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4169E1] text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900">{learning.title}</span>
                    <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded">
                      {learning.team}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    "{learning.learning}"
                  </p>
                  <p className="text-xs text-gray-400">{learning.daysAgo} days ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL LEARNINGS REPOSITORY TABLE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">All Learnings Repository</h3>
              <p className="text-sm text-gray-500">Knowledge captured from experimentation</p>
            </div>
            <div className="flex gap-3">
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white">
                <option>All Categories</option>
                <option>UX</option>
                <option>Performance</option>
                <option>AI/ML</option>
              </select>
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white">
                <option>All Teams</option>
                <option>Growth</option>
                <option>Monetization</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learning</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experiment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {learningsData.slice(0, 8).map((learning) => (
                <tr key={learning.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900 max-w-md">{learning.learning}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-700">
                      {learning.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{learning.team}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer">{learning.expName}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All Learnings →
          </button>
        </div>
      </div>

      {/* TOP LEARNINGS - Influenced Lift */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Learnings</h3>
        <p className="text-sm text-gray-500 mb-4">Top used learnings for experiments - Influenced Lift</p>
        <div className="space-y-4">
          {[
            { learning: 'Action-oriented CTAs beat generic messaging', influenced: 5, lift: '+8.2%' },
            { learning: 'Feature comparison tables outperform bullet lists', influenced: 4, lift: '+6.5%' },
            { learning: 'Showing exact price early increases trust', influenced: 3, lift: '+5.8%' },
            { learning: 'Users prefer gradual onboarding', influenced: 3, lift: '+4.2%' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4169E1] text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.learning}</p>
                  <p className="text-xs text-gray-500">Influenced {item.influenced} experiments</p>
                </div>
              </div>
              <span className="text-sm font-medium text-emerald-600">{item.lift}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningsTab;
