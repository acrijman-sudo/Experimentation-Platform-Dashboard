import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { ArrowDownRight, ArrowUpRight, AlertTriangle } from 'lucide-react';
import StatusBadge from '../StatusBadge';
import { stageComparison, cycleTimeTrend, activeCycleOutliers, closedCycleOutliers, cycleTimeStats, getDataForPeriod } from '../../data/mockData';

const VelocityTab = ({ timeRange = 'FY Q2', filters = { teams: [], teamCategory: 'All', tenant: 'All' } }) => {
  const periodData = getDataForPeriod(timeRange, filters);
  const metrics = periodData.metrics;
  const totalCurrent = stageComparison.reduce((sum, s) => sum + s.current, 0);
  const totalPrevious = stageComparison.reduce((sum, s) => sum + s.previous, 0);
  
  // Calculate current bottleneck (stage with longest duration)
  const bottleneck = stageComparison.reduce((max, stage) => 
    stage.current > max.current ? stage : max
  );
  const bottleneckPercentage = ((bottleneck.current / totalCurrent) * 100).toFixed(0);

  return (
    <div className="space-y-8">
      {/* PART 1: HERO SECTION - 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* COL 1: Cycle Time Overview + Bottleneck (60%) */}
        <div className="lg:col-span-3 bg-gradient-to-r from-[#4169E1] to-[#5B7FE1] rounded-xl p-8 text-white">
          <p className="text-blue-100 text-sm font-medium mb-1">Current Cycle Time</p>
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-bold">{cycleTimeStats.mean}</span>
            <span className="text-2xl text-blue-200">days</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-2 bg-emerald-500/30 rounded-lg px-3 py-1 border border-emerald-400/50">
              <ArrowDownRight className="w-4 h-4 text-emerald-200" />
              <span className="text-sm font-semibold">-12.4 days</span>
            </div>
            <span className="text-sm text-blue-200">26% faster vs Q3</span>
          </div>

          {/* Key Metrics Grid */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-blue-200 text-xs">Median</p>
                <p className="text-xl font-bold">{cycleTimeStats.median} days</p>
              </div>
              <div>
                <p className="text-blue-200 text-xs">Std Deviation</p>
                <p className="text-xl font-bold">{cycleTimeStats.stdDev} days</p>
              </div>
              <div>
                <p className="text-blue-200 text-xs">Outliers</p>
                <p className="text-xl font-bold">{cycleTimeStats.outliersCount} ({cycleTimeStats.outliersPercent}%)</p>
              </div>
              <div>
                <p className="text-blue-200 text-xs">Current Bottleneck</p>
                <p className="text-xl font-bold">{bottleneck.stage}</p>
                <p className="text-xs text-blue-200 mt-0.5">{bottleneck.current}d ({bottleneckPercentage}%)</p>
              </div>
            </div>
          </div>
        </div>

        {/* COL 2: Compact Trend Sparkline (40%) */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">6-Month Trend</h3>
          <p className="text-xs text-gray-500 mb-4">Total cycle time evolution</p>
          
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={cycleTimeTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                stroke="#9CA3AF" 
                fontSize={11}
                tickLine={false}
              />
              <YAxis 
                stroke="#9CA3AF" 
                fontSize={11}
                domain={[0, 60]}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #E5E7EB', 
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                formatter={(value) => [`${value} days`]}
              />
              <Line 
                type="monotone" 
                dataKey="total" 
                stroke="#4169E1" 
                strokeWidth={2.5} 
                dot={{ r: 4, fill: '#4169E1' }}
                name="Total Cycle Time"
              />
            </LineChart>
          </ResponsiveContainer>

          {/* Trend Insights */}
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Aug 2024</span>
              <span className="font-semibold text-gray-900">50 days</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Jan 2025</span>
              <span className="font-semibold text-gray-900">35 days</span>
            </div>
            <div className="flex items-center justify-between text-emerald-600">
              <span className="font-medium">Improvement</span>
              <span className="font-bold">-15 days (30%)</span>
            </div>
          </div>
        </div>
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

      {/* PART 3: OUTLIERS - Stacked Vertically */}
      
      {/* Active & At Risk */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <h3 className="text-lg font-semibold text-gray-900">Active & At Risk</h3>
            <span className="ml-auto px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
              {activeCycleOutliers.length}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Experiments currently delayed - action needed</p>
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
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{exp.expected}d</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-900">{exp.actual}d</span>
                  </td>
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

      {/* Closed with Delays */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <h3 className="text-lg font-semibold text-gray-900">Closed with Delays</h3>
            <span className="ml-auto px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">
              {closedCycleOutliers.length}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Learning opportunities from completed experiments</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experiment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Outcome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bottleneck Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {closedCycleOutliers.map((exp) => {
                // Get actual duration of the bottleneck stage
                const getBottleneckDuration = () => {
                  const bottleneckLower = exp.bottleneck.toLowerCase();
                  if (bottleneckLower.includes('discovery') || bottleneckLower.includes('dev')) {
                    return exp.stages.discovery;
                  } else if (bottleneckLower.includes('schedule')) {
                    return exp.stages.schedule;
                  } else if (bottleneckLower.includes('run')) {
                    return exp.stages.run;
                  } else if (bottleneckLower.includes('analysis')) {
                    return exp.stages.analysis;
                  }
                  return '-';
                };

                return (
                  <tr key={exp.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{exp.name}</p>
                        <p className="text-xs text-gray-500">{exp.id}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{exp.team}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={exp.output} />
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-900">{exp.total} days</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-amber-900">{exp.bottleneck}</p>
                        <p className="text-xs text-gray-500 mt-0.5 max-w-xs">{exp.reason}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-gray-900">{getBottleneckDuration()}d</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium text-amber-700 bg-amber-100 rounded-full">
                        {exp.variance}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VelocityTab;
