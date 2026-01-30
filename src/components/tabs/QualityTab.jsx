import React from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { Gauge, Zap, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import MetricCard from '../MetricCard';

// Performance trend data
const performanceTrend = [
  { month: 'Aug', p90: 2.8, p50: 1.2 },
  { month: 'Sep', p90: 2.6, p50: 1.1 },
  { month: 'Oct', p90: 2.4, p50: 1.0 },
  { month: 'Nov', p90: 2.2, p50: 0.95 },
  { month: 'Dec', p90: 2.1, p50: 0.9 },
  { month: 'Jan', p90: 1.9, p50: 0.85 },
];

// Consistency rate by platform
const consistencyByPlatform = [
  { platform: 'Desktop Web', rate: 94 },
  { platform: 'Mobile Android', rate: 91 },
  { platform: 'Mobile iOS', rate: 92 },
  { platform: 'PWA', rate: 88 },
  { platform: 'Embed SDK', rate: 86 },
];

// Invalid rate by team
const invalidRateByTeam = [
  { team: 'Growth', rate: 2.1 },
  { team: 'Mobile Native', rate: 3.4 },
  { team: 'Onboarding', rate: 1.8 },
  { team: 'Monetization', rate: 2.5 },
  { team: 'Education', rate: 1.2 },
  { team: 'Squirrel', rate: 0.8 },
];

const QualityTab = () => {
  return (
    <div className="space-y-8">
      {/* HERO CARDS - Quality metrics with blue background */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Performance (P90)"
          value="1.9s"
          change="-0.9s vs last quarter"
          changeType="positive"
          icon={Zap}
          subtitle="Load time P90"
          variant="blue"
        />
        <MetricCard
          title="Invalid Rate"
          value="2.1%"
          change="-0.8% vs last quarter"
          changeType="positive"
          icon={AlertTriangle}
          subtitle="Invalid experiment assignments"
          variant="blue"
        />
        <MetricCard
          title="Consistency Rate"
          value="91.2%"
          change="+3.4% vs last quarter"
          changeType="positive"
          icon={CheckCircle}
          subtitle="Users seeing consistent experience"
          variant="blue"
        />
        <MetricCard
          title="Avg. Response Time"
          value="45ms"
          change="-12ms vs last quarter"
          changeType="positive"
          icon={Clock}
          subtitle="SDK response time"
          variant="blue"
        />
      </div>

      {/* Performance Trend Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Performance Trend</h3>
          <p className="text-sm text-gray-500">Load time P90 and P50 over the past 6 months</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
            <YAxis stroke="#9CA3AF" fontSize={12} unit="s" domain={[0, 4]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px' }}
              formatter={(value) => [`${value}s`]}
            />
            <Legend />
            <Line type="monotone" dataKey="p90" stroke="#4169E1" strokeWidth={3} dot={{ r: 5 }} name="P90 Load Time" />
            <Line type="monotone" dataKey="p50" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} name="P50 Load Time" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Consistency Rate by Platform */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Consistency Rate by Platform</h3>
            <p className="text-sm text-gray-500">Users seeing consistent experiment experience</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={consistencyByPlatform} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
              <XAxis type="number" stroke="#9CA3AF" fontSize={12} domain={[80, 100]} unit="%" />
              <YAxis type="category" dataKey="platform" stroke="#9CA3AF" fontSize={12} width={100} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="rate" fill="#10B981" radius={[0, 4, 4, 0]} name="Consistency Rate" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Invalid Rate by Team */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Invalid Rate by Team</h3>
            <p className="text-sm text-gray-500">Invalid experiment assignments percentage</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={invalidRateByTeam} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
              <XAxis type="number" stroke="#9CA3AF" fontSize={12} domain={[0, 5]} unit="%" />
              <YAxis type="category" dataKey="team" stroke="#9CA3AF" fontSize={12} width={100} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="rate" fill="#F59E0B" radius={[0, 4, 4, 0]} name="Invalid Rate" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quality Health Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quality Health Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <span className="font-semibold text-emerald-900">Performance</span>
            </div>
            <p className="text-sm text-emerald-700">P90 load time within target (&lt;2s)</p>
            <p className="text-2xl font-bold text-emerald-600 mt-2">Healthy</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <span className="font-semibold text-emerald-900">Consistency</span>
            </div>
            <p className="text-sm text-emerald-700">Above 90% threshold across platforms</p>
            <p className="text-2xl font-bold text-emerald-600 mt-2">Healthy</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              <span className="font-semibold text-yellow-900">Invalid Rate</span>
            </div>
            <p className="text-sm text-yellow-700">Mobile Native above 3% threshold</p>
            <p className="text-2xl font-bold text-yellow-600 mt-2">Warning</p>
          </div>
        </div>
      </div>

      {/* Detailed Metrics Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Platform Quality Metrics</h3>
          <p className="text-sm text-gray-500">Detailed breakdown by platform</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Load Time P90</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consistency Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invalid Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { platform: 'Desktop Web', loadTime: '1.8s', consistency: '94%', invalid: '1.8%', status: 'healthy' },
                { platform: 'Mobile Android', loadTime: '2.1s', consistency: '91%', invalid: '3.2%', status: 'warning' },
                { platform: 'Mobile iOS', loadTime: '1.9s', consistency: '92%', invalid: '2.4%', status: 'healthy' },
                { platform: 'Desktop PWA', loadTime: '2.0s', consistency: '88%', invalid: '2.1%', status: 'healthy' },
                { platform: 'Embed SDK', loadTime: '1.5s', consistency: '86%', invalid: '1.5%', status: 'warning' },
              ].map((row) => (
                <tr key={row.platform} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.platform}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.loadTime}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-emerald-500 h-2 rounded-full" 
                          style={{ width: row.consistency }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{row.consistency}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.invalid}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      row.status === 'healthy' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {row.status === 'healthy' ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <AlertTriangle className="w-3 h-3" />
                      )}
                      {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                    </span>
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

export default QualityTab;
