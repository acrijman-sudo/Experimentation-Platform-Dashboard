import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { ArrowDownRight, ArrowUpRight, AlertTriangle } from 'lucide-react';
import StatusBadge from '../StatusBadge';
import { stageComparison, cycleTimeTrend, activeCycleOutliers, closedCycleOutliers, cycleTimeStats } from '../../data/mockData';

const VelocityTab = () => {
  const totalCurrent = stageComparison.reduce((sum, s) => sum + s.current, 0);
  const totalPrevious = stageComparison.reduce((sum, s) => sum + s.previous, 0);

  return (
    <div className="space-y-8">
      {/* CURRENT CYCLE TIME - Hero Card with blue gradient */}
      <div className="bg-gradient-to-r from-[#4169E1] to-[#5B7FE1] rounded-xl p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-blue-100 text-sm font-medium mb-1">Current Cycle Time</p>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold">{cycleTimeStats.mean}</span>
              <span className="text-2xl text-blue-200">days</span>
            </div>
            <p className="text-blue-100 mt-2">From idea to production rollout</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-2 bg-emerald-500/30 rounded-lg px-4 py-2 border border-emerald-400/50">
              <ArrowDownRight className="w-5 h-5 text-emerald-200" />
              <div className="text-right">
                <span className="text-lg font-bold block">-12.4 days</span>
                <span className="text-xs text-emerald-200">26% faster vs Q3</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-blue-200 text-xs">Median</p>
              <p className="text-2xl font-bold">{cycleTimeStats.median} days</p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-blue-200">Outliers</p>
              <p className="text-xl font-semibold">{cycleTimeStats.outliersCount} experiments</p>
              <p className="text-xs text-blue-200 mt-1">{cycleTimeStats.outliersPercent}% of total</p>
            </div>
            <div>
              <p className="text-blue-200">Scope</p>
              <p className="text-xl font-semibold">Closed Only</p>
              <p className="text-xs text-blue-200 mt-1">{cycleTimeStats.totalExperiments} experiments</p>
            </div>
            <div>
              <p className="text-blue-200">Std Deviation</p>
              <p className="text-xl font-semibold">{cycleTimeStats.stdDev} days</p>
              <p className="text-xs text-blue-200 mt-1">Variability measure</p>
            </div>
          </div>
        </div>
      </div>

      {/* CYCLE TIME EVOLUTION - Line Chart (All Stages) */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Cycle Time Trend</h3>
          <p className="text-sm text-gray-500">Cycle time evolution by stage over the past 6 months</p>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={cycleTimeTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
            <YAxis stroke="#9CA3AF" fontSize={12} domain={[0, 60]} unit=" days" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px' }}
              formatter={(value) => [`${value} days`]}
            />
            <Legend />
            <Line type="monotone" dataKey="total" stroke="#1E293B" strokeWidth={3} dot={{ r: 5 }} name="Total Cycle Time" />
            <Line type="monotone" dataKey="discoveryDev" stroke="#4169E1" strokeWidth={2} dot={{ r: 4 }} name="Discovery + Dev" />
            <Line type="monotone" dataKey="schedule" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} name="Schedule" />
            <Line type="monotone" dataKey="run" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} name="Run" />
            <Line type="monotone" dataKey="analysis" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} name="Analysis" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* STAGE-BY-STAGE ANALYSIS - Stacked Horizontal Bars (4 stages) */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Stage-by-Stage Analysis</h3>
          <p className="text-sm text-gray-500">Current vs Previous quarter comparison (4 stages breakdown)</p>
        </div>

        {/* Current Quarter Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">Current (Q4 2024)</span>
            </div>
            <span className="text-lg font-bold text-gray-900">{totalCurrent.toFixed(1)} days</span>
          </div>
          <div className="flex h-12 rounded-lg overflow-hidden shadow-md">
            {stageComparison.map((stage, index) => {
              const widthPercent = (stage.current / totalCurrent) * 100;
              return (
                <div
                  key={stage.stage}
                  className="flex items-center justify-center relative group cursor-pointer transition-all hover:brightness-110"
                  style={{ width: `${widthPercent}%`, backgroundColor: stage.color }}
                  title={`${stage.stage}: ${stage.current} days`}
                >
                  <span className="text-white text-sm font-bold drop-shadow-md">{stage.current}d</span>
                  {stage.change < 0 && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-emerald-600 font-medium flex items-center gap-0.5">
                      <ArrowDownRight className="w-3 h-3" />
                      {Math.abs(stage.change)}d
                    </div>
                  )}
                  {stage.change > 0 && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-red-600 font-medium flex items-center gap-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                      +{stage.change}d
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Previous Quarter Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">Previous (Q2 2024)</span>
            <span className="text-lg font-semibold text-gray-400">{totalPrevious.toFixed(1)} days</span>
          </div>
          <div className="flex h-10 rounded-lg overflow-hidden opacity-60">
            {stageComparison.map((stage) => {
              const widthPercent = (stage.previous / totalPrevious) * 100;
              return (
                <div
                  key={stage.stage}
                  className="flex items-center justify-center"
                  style={{ width: `${widthPercent}%`, backgroundColor: stage.color }}
                >
                  <span className="text-white text-xs font-semibold">{stage.previous}d</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-gray-100">
          {stageComparison.map((stage) => (
            <div key={stage.stage} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: stage.color }} />
              <span className="text-sm text-gray-600">{stage.stage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVE CYCLE TIME OUTLIERS TABLE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Active Cycle Time Outliers</h3>
          <p className="text-sm text-gray-500">Experiments exceeding expected duration</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experiment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activeCycleOutliers.map((exp) => (
                <tr key={exp.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{exp.name}</p>
                      <p className="text-xs text-gray-500">{exp.id}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{exp.team}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{exp.stage}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{exp.expected} days</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{exp.actual} days</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">
                      {exp.variance}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CLOSED CYCLE TIME OUTLIERS - Visual representation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Closed Cycle Time Outliers</h3>
          <p className="text-sm text-gray-500">Completed experiments with extended timelines</p>
        </div>
        <div className="divide-y divide-gray-100">
          {closedCycleOutliers.map((exp) => (
            <div key={exp.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-900">{exp.name}</p>
                    <StatusBadge status={exp.output} />
                  </div>
                  <p className="text-sm text-gray-500">{exp.id} • {exp.team}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{exp.total}</span>
                    <span className="text-gray-500">days</span>
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                      {exp.variance}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Stacked bar visualization (4 stages) */}
              <div className="flex h-10 rounded-lg overflow-hidden bg-gray-100 mb-3">
                <div 
                  className="bg-[#4169E1] flex items-center justify-center relative"
                  style={{ width: `${(exp.stages.discovery / exp.total) * 100}%` }}
                >
                  {exp.bottleneck === 'Discovery + Dev' && (
                    <AlertTriangle className="w-4 h-4 text-white absolute" />
                  )}
                  <span className="text-xs text-white font-medium">{exp.stages.discovery}d</span>
                </div>
                <div 
                  className="bg-[#8B5CF6] flex items-center justify-center"
                  style={{ width: `${(exp.stages.schedule / exp.total) * 100}%` }}
                >
                  <span className="text-xs text-white font-medium">{exp.stages.schedule}d</span>
                </div>
                <div 
                  className="bg-[#10B981] flex items-center justify-center relative"
                  style={{ width: `${(exp.stages.run / exp.total) * 100}%` }}
                >
                  {exp.bottleneck === 'Run' && (
                    <AlertTriangle className="w-4 h-4 text-white absolute" />
                  )}
                  <span className="text-xs text-white font-medium">{exp.stages.run}d</span>
                </div>
                <div 
                  className="bg-[#F59E0B] flex items-center justify-center"
                  style={{ width: `${(exp.stages.analysis / exp.total) * 100}%` }}
                >
                  <span className="text-xs text-white font-medium">{exp.stages.analysis}d</span>
                </div>
              </div>
              
              {/* Bottleneck explanation */}
              <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-900">
                    Bottleneck: {exp.bottleneck}
                  </p>
                  <p className="text-sm text-amber-700">{exp.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stage Legend */}
      <div className="flex flex-wrap justify-center gap-6 p-4 bg-white rounded-lg border border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#4169E1]" />
          <span className="text-sm text-gray-600">Discovery + Dev</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#8B5CF6]" />
          <span className="text-sm text-gray-600">Schedule</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#10B981]" />
          <span className="text-sm text-gray-600">Run</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#F59E0B]" />
          <span className="text-sm text-gray-600">Analysis</span>
        </div>
      </div>
    </div>
  );
};

export default VelocityTab;
