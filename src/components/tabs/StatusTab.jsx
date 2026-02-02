import React from 'react';
import { 
  Activity, Clock, AlertTriangle, CheckCircle, Calendar, 
  Eye, Users, AlertCircle, Zap
} from 'lucide-react';
import StatusBadge from '../StatusBadge';
import HealthIndicator from '../HealthIndicator';

// Current status snapshot data
const statusSnapshot = [
  { name: 'Scheduled', value: 8, color: '#8B5CF6' },
  { name: 'Active', value: 23, color: '#4169E1' },
  { name: 'In Analysis', value: 5, color: '#10B981' },
  { name: 'Pending Decision', value: 4, color: '#EC4899' },
];

// Experiments needing attention
const needsAttention = [
  { id: 'EXP-2839', name: 'Android Home Redesign', team: 'Mobile Native', issue: 'Elevated error rate in Variant B', health: 'warning', daysRunning: 18 },
  { id: 'EXP-2834', name: 'Quick Export Options', team: 'Growth', issue: 'Sample size below threshold', health: 'critical', daysRunning: 6 },
  { id: 'EXP-2851', name: 'Checkout Flow v4', team: 'Commerce', issue: 'Metric variance unusually high', health: 'warning', daysRunning: 12 },
];

// Experiments close to completion
const nearCompletion = [
  { id: 'EXP-2847', name: 'New Onboarding Flow v3', team: 'Onboarding', progress: 92, daysLeft: 2, expectedOutcome: 'Trending positive' },
  { id: 'EXP-2845', name: 'Embed SDK Welcome Screen', team: 'Growth', progress: 85, daysLeft: 4, expectedOutcome: 'Inconclusive' },
  { id: 'EXP-2838', name: 'Squirrel Editor Hints', team: 'Squirrel', progress: 78, daysLeft: 5, expectedOutcome: 'Trending positive' },
];

// Pending decisions
const pendingDecisions = [
  { id: 'EXP-2841', name: 'Premium Upsell Modal', team: 'Monetization', outcome: 'Win', lift: '+8.4%', daysPending: 2, action: 'Approve Rollout' },
  { id: 'EXP-2832', name: 'Quick Actions CTA', team: 'Growth', outcome: 'Win', lift: '+12.3%', daysPending: 1, action: 'Approve Rollout' },
  { id: 'EXP-2825', name: 'PWA Install Prompt', team: 'Growth', outcome: 'Flat', lift: '+0.3%', daysPending: 3, action: 'Archive or Iterate' },
  { id: 'EXP-2818', name: 'Monetization Modal Timing', team: 'Monetization', outcome: 'Lost', lift: '-3.4%', daysPending: 1, action: 'Capture Learnings' },
];

// Today's activity
const todayActivity = [
  { time: '2 hours ago', action: 'Experiment concluded', experiment: 'Premium Upsell Modal', team: 'Monetization' },
  { time: '4 hours ago', action: 'New experiment started', experiment: 'Dark Mode Toggle v2', team: 'Design System' },
  { time: '6 hours ago', action: 'Health alert triggered', experiment: 'Android Home Redesign', team: 'Mobile Native' },
  { time: '8 hours ago', action: 'Reached significance', experiment: 'Quick Actions CTA', team: 'Growth' },
];

const StatusTab = ({ timeRange = 'FY Q2', filters = { teams: [], teamCategory: 'All', tenant: 'All' } }) => {
  const totalExperiments = statusSnapshot.reduce((sum, s) => sum + s.value, 0);
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="space-y-6">
      {/* Live Status Header */}
      <div className="bg-gradient-to-r from-[#4169E1] to-[#5B7FE1] rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-100">LIVE STATUS</span>
            </div>
            <h2 className="text-2xl font-bold">Experimentation Program Snapshot</h2>
            <p className="text-blue-100 mt-1">{formattedDate} • Last updated: {formattedTime}</p>
          </div>
          <div className="text-right">
            <p className="text-5xl font-bold">{totalExperiments}</p>
            <p className="text-blue-100">In-Flight</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statusSnapshot.map((status) => (
          <div key={status.name} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }} />
              <span className="text-sm text-gray-500">{status.name}</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{status.value}</p>
          </div>
        ))}
      </div>

      {/* Needs Immediate Attention + Today's Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Needs Immediate Attention (1/2) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100 bg-red-50 rounded-t-xl">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-semibold text-red-900">Needs Immediate Attention</h3>
              <span className="ml-auto px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                {needsAttention.length} issues
              </span>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {needsAttention.map((exp) => (
              <div key={exp.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900">{exp.name}</p>
                      <HealthIndicator health={exp.health} />
                    </div>
                    <p className="text-sm text-gray-500">{exp.id} • {exp.team} • Running {exp.daysRunning} days</p>
                    <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" />
                      {exp.issue}
                    </p>
                  </div>
                  <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200">
                    Investigate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Activity (1/2) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Today's Activity</h3>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {todayActivity.map((activity, index) => (
              <div key={index} className="p-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                <div>
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.action}</span>
                    {' • '}
                    <span className="text-blue-600">{activity.experiment}</span>
                  </p>
                  <p className="text-xs text-gray-500">{activity.team} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Near Completion + Pending Decisions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Near Completion */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Near Completion</h3>
              <span className="ml-auto text-sm text-gray-500">Next 7 days</span>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {nearCompletion.map((exp) => (
              <div key={exp.id} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-gray-900">{exp.name}</p>
                    <p className="text-sm text-gray-500">{exp.team} • {exp.daysLeft} days left</p>
                  </div>
                  <span className={`text-sm font-medium ${
                    exp.expectedOutcome.includes('positive') ? 'text-emerald-600' : 'text-gray-500'
                  }`}>
                    {exp.expectedOutcome}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${exp.progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">{exp.progress}% complete</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Decisions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100 bg-amber-50 rounded-t-xl">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-amber-900">Pending Decisions</h3>
              <span className="ml-auto px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                {pendingDecisions.length} awaiting
              </span>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {pendingDecisions.map((exp) => (
              <div key={exp.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900">{exp.name}</p>
                      <StatusBadge status={exp.outcome} />
                    </div>
                    <p className="text-sm text-gray-500">{exp.team} • Pending {exp.daysPending} days</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${
                      exp.lift.startsWith('+') && parseFloat(exp.lift) > 1 ? 'text-emerald-600' : 
                      exp.lift.startsWith('-') ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      {exp.lift}
                    </p>
                    <p className="text-xs text-amber-600">{exp.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default StatusTab;
