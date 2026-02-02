// Monthly experiment velocity data for LINE chart
// JIRA Experiments Created is always bigger than HZ Experiments Created
export const monthlyData = [
  { month: 'Jul', jiraCreated: 18, hzCreated: 12, hzCompleted: 8, hzWin: 3, jiraRollout: 2 },
  { month: 'Aug', jiraCreated: 26, hzCreated: 18, hzCompleted: 14, hzWin: 5, jiraRollout: 4 },
  { month: 'Sep', jiraCreated: 32, hzCreated: 22, hzCompleted: 16, hzWin: 7, jiraRollout: 5 },
  { month: 'Oct', jiraCreated: 40, hzCreated: 28, hzCompleted: 21, hzWin: 9, jiraRollout: 7 },
  { month: 'Nov', jiraCreated: 48, hzCreated: 35, hzCompleted: 28, hzWin: 12, jiraRollout: 9 },
  { month: 'Dec', jiraCreated: 44, hzCreated: 31, hzCompleted: 25, hzWin: 10, jiraRollout: 8 },
  { month: 'Jan', jiraCreated: 55, hzCreated: 42, hzCompleted: 32, hzWin: 14, jiraRollout: 11 },
];

// Team performance data
export const teamPerformance = [
  { team: 'Growth', experiments: 28, experimentationRate: 50, winRate: 48, avgLift: 9.2, avgDuration: 14, learnings: 12, captureRate: 89, topFeature: 'Segmentation', topSegmentation: 'Platform-based', teamType: 'Returning', type: 'PLG', tenant: 'Project X' },
  { team: 'Mobile Native', experiments: 18, experimentationRate: 29, winRate: 38, avgLift: 6.5, avgDuration: 21, learnings: 8, captureRate: 75, topFeature: 'Multi-variant', topSegmentation: 'Device Type', teamType: 'Returning', type: 'Feature Team', tenant: 'Aura' },
  { team: 'Onboarding', experiments: 15, experimentationRate: 52, winRate: 47, avgLift: 12.6, avgDuration: 18, learnings: 9, captureRate: 80, topFeature: 'A/B Tests', topSegmentation: 'New User', teamType: 'New', type: 'PLG', tenant: 'Project X' },
  { team: 'Monetization', experiments: 12, experimentationRate: 75, winRate: 32, avgLift: 15.2, avgDuration: 28, learnings: 6, captureRate: 92, topFeature: 'Targeting', topSegmentation: 'User Lifetime', teamType: 'Returning', type: 'Feature Team', tenant: 'Quick Actions' },
  { team: 'Education', experiments: 9, experimentationRate: 50, winRate: 44, avgLift: 9.8, avgDuration: 16, learnings: 3, captureRate: 67, topFeature: 'Segmentation', topSegmentation: 'Unverified Teacher', teamType: 'New', type: 'Feature Team', tenant: 'Aura' },
  { team: 'Squirrel', experiments: 6, experimentationRate: 43, winRate: 50, avgLift: 1.0, avgDuration: 12, learnings: 5, captureRate: 50, topFeature: 'A/B Tests', topSegmentation: 'Platform-based', teamType: 'Returning', type: 'Feature Team', tenant: 'Squirrel' },
  { team: 'Commerce', experiments: 4, experimentationRate: 18, winRate: 25, avgLift: 3.2, avgDuration: 32, learnings: 2, captureRate: 22, topFeature: 'A/B Tests', topSegmentation: 'Geographic', teamType: 'Churned', type: 'Feature Team', tenant: 'Project X' },
  { team: 'Analytics', experiments: 0, experimentationRate: 0, winRate: 0, avgLift: 0, avgDuration: 0, learnings: 0, captureRate: 0, topFeature: 'N/A', topSegmentation: 'N/A', teamType: 'Inactive', type: 'Feature Team', tenant: 'Quick Actions' },
];

// Platform distribution - horizontal bar chart data
export const platformDistribution = [
  { name: 'desktop-web-browser', value: 60, color: '#4169E1' },
  { name: 'mobile-app-android', value: 35, color: '#4169E1' },
  { name: 'mobile-app-iOS', value: 25, color: '#4169E1' },
  { name: 'desktop-web-pwa', value: 20, color: '#4169E1' },
  { name: 'mobile-web-iOS', value: 15, color: '#4169E1' },
  { name: 'mobile-web-android', value: 12, color: '#4169E1' },
  { name: 'mobile-web-ipadOS', value: 10, color: '#4169E1' },
  { name: 'mobile-app-ipadOS', value: 8, color: '#4169E1' },
];

// Outcome distribution - DONUT chart (Win, Loose, Flat, Invalid)
export const outcomeDistribution = [
  { name: 'Win', value: 38, color: '#10B981' },
  { name: 'Loose', value: 28, color: '#EF4444' },
  { name: 'Flat', value: 24, color: '#F59E0B' },
  { name: 'Invalid', value: 10, color: '#6B7280' },
];

// Experiment Type distribution - DONUT chart (A/B Tests, Multi-variant)
export const experimentTypeDistribution = [
  { name: 'A/B Tests', value: 72, color: '#4169E1' },
  { name: 'Multi-variant', value: 28, color: '#8B5CF6' },
];

// Health Alerts
export const healthAlerts = [
  { 
    id: 'EXP-1242', 
    type: 'critical', 
    message: 'Variant B showing 15% higher error rate than control', 
    time: '3 hours ago' 
  },
  { 
    id: 'EXP-1238', 
    type: 'warning', 
    message: 'Sample size below recommended threshold', 
    time: '5 hours ago' 
  },
  { 
    id: 'EXP-1246', 
    type: 'info', 
    message: 'Approaching statistical significance (p=0.06)', 
    time: '8 hours ago' 
  },
];

// Recent experiments
export const recentExperiments = [
  { id: 'EXP-2847', name: 'User Retention Flow v1', team: 'Onboarding', platform: 'ATS live', status: 'Closed', health: 'healthy', lift: '+12.3%', hasLearning: true, duration: '12 days', expectedDuration: '14 days' },
  { id: 'EXP-2841', name: 'Premium Smart Model', team: 'Monetization', platform: 'ATS', status: 'Win', health: 'healthy', lift: '+8.2%', hasLearning: true, duration: '21 days', expectedDuration: '21 days' },
  { id: 'EXP-2839', name: 'Android Home Redesign', team: 'Home Screen', platform: 'Android', status: 'Active', health: 'warning', lift: null, hasLearning: true, duration: '18 days', expectedDuration: '14 days' },
  { id: 'EXP-2835', name: 'Template Showcase v3', team: 'Discovery', platform: 'ATS', status: 'Closed', health: 'healthy', lift: '+5.8%', hasLearning: true, duration: '14 days', expectedDuration: '14 days' },
  { id: 'EXP-2832', name: 'Quick Actions CTA', team: 'Squirrel', platform: 'Embed SDK', status: 'Win', health: 'healthy', lift: '-6.2%', hasLearning: true, duration: '16 days', expectedDuration: '14 days' },
  { id: 'EXP-2828', name: 'Squirrel Navigation Flow', team: 'Education', platform: 'ATS', status: 'Active', health: 'healthy', lift: null, hasLearning: true, duration: '9 days', expectedDuration: '14 days' },
];

// All experiments for portfolio view
export const allExperiments = [
  { id: 'EXP-2847', name: 'New Onboarding Flow v3', team: 'Onboarding', platform: 'Web', status: 'Active', health: 'healthy', lift: null, duration: '12 days', startDate: '2025-01-07', segment: 'New User', exposureEvents: 1, variants: 2, learnings: null, learningTags: [] },
  { id: 'EXP-2846', name: 'iOS Navigation Tabs', team: 'Mobile Native', platform: 'iOS', status: 'Scheduled', health: 'healthy', lift: null, duration: '—', startDate: '2025-01-22', segment: 'Platform', exposureEvents: 1, variants: 3, learnings: null, learningTags: [] },
  { id: 'EXP-2845', name: 'Embed SDK Welcome Screen', team: 'Growth', platform: 'Embed SDK', status: 'Active', health: 'healthy', lift: null, duration: '8 days', startDate: '2025-01-11', segment: 'Country', exposureEvents: 2, variants: 2, learnings: null, learningTags: [] },
  { id: 'EXP-2841', name: 'Premium Upsell Modal', team: 'Monetization', platform: 'Web', status: 'Won', health: 'healthy', lift: '+8.4%', duration: '21 days', startDate: '2024-12-15', segment: 'None', exposureEvents: 1, variants: 2, learnings: 2, learningTags: ['Pricing', 'UX'] },
  { id: 'EXP-2839', name: 'Android Home Redesign', team: 'Mobile Native', platform: 'Android', status: 'Active', health: 'warning', lift: null, duration: '18 days', startDate: '2025-01-01', segment: 'First Access Time', exposureEvents: 3, variants: 2, learnings: null, learningTags: [] },
  { id: 'EXP-2838', name: 'Squirrel Editor Hints', team: 'Squirrel', platform: 'Web', status: 'Active', health: 'healthy', lift: null, duration: '15 days', startDate: '2025-01-04', segment: 'None', exposureEvents: 1, variants: 2, learnings: null, learningTags: [] },
  { id: 'EXP-2835', name: 'Template Discovery AI', team: 'Growth', platform: 'Web', status: 'Lost', health: 'healthy', lift: '-2.1%', duration: '14 days', startDate: '2024-12-20', segment: 'Platform', exposureEvents: 1, variants: 3, learnings: 3, learningTags: ['AI/ML', 'Discovery', 'Performance'] },
  { id: 'EXP-2834', name: 'Quick Export Options', team: 'Growth', platform: 'Web', status: 'Paused', health: 'critical', lift: null, duration: '6 days', startDate: '2025-01-10', segment: 'None', exposureEvents: 1, variants: 2, learnings: 1, learningTags: ['Technical'] },
  { id: 'EXP-2832', name: 'Quick Actions CTA', team: 'Growth', platform: 'Embed SDK', status: 'Won', health: 'healthy', lift: '+12.3%', duration: '16 days', startDate: '2024-12-18', segment: 'Country', exposureEvents: 2, variants: 2, learnings: 2, learningTags: ['CTA', 'Conversion'] },
  { id: 'EXP-2830', name: 'Unverified Teacher Banner', team: 'Education', platform: 'Web', status: 'Won', health: 'healthy', lift: '+5.7%', duration: '19 days', startDate: '2024-12-10', segment: 'Unverified Teacher', exposureEvents: 1, variants: 2, learnings: 1, learningTags: ['Education'] },
  { id: 'EXP-2828', name: 'Teacher Verification Flow', team: 'Education', platform: 'Web', status: 'Active', health: 'healthy', lift: null, duration: '9 days', startDate: '2025-01-10', segment: 'Unverified Teacher', exposureEvents: 1, variants: 3, learnings: null, learningTags: [] },
  { id: 'EXP-2825', name: 'PWA Install Prompt', team: 'Growth', platform: 'PWA', status: 'Inconclusive', health: 'healthy', lift: '+0.3%', duration: '28 days', startDate: '2024-12-01', segment: 'Platform', exposureEvents: 1, variants: 2, learnings: 2, learningTags: ['PWA', 'Mobile Web'] },
  { id: 'EXP-2822', name: 'Pre-Auth Landing Page', team: 'Onboarding', platform: 'Web', status: 'Active', health: 'healthy', lift: null, duration: '5 days', startDate: '2025-01-14', segment: 'Unauthenticated', exposureEvents: 1, variants: 2, learnings: null, learningTags: [] },
  { id: 'EXP-2820', name: 'Android Notification Opt-in', team: 'Mobile Native', platform: 'Android', status: 'Won', health: 'healthy', lift: '+9.2%', duration: '14 days', startDate: '2024-12-22', segment: 'First Access Time', exposureEvents: 1, variants: 2, learnings: 1, learningTags: ['Notifications'] },
  { id: 'EXP-2818', name: 'Monetization Modal Timing', team: 'Monetization', platform: 'Web', status: 'Lost', health: 'healthy', lift: '-3.4%', duration: '21 days', startDate: '2024-12-05', segment: 'None', exposureEvents: 2, variants: 3, learnings: 4, learningTags: ['Timing', 'UX', 'Monetization', 'User Behavior'] },
  { id: 'EXP-2815', name: 'iOS Share Extension', team: 'Mobile Native', platform: 'iOS', status: 'Rolled Out', health: 'healthy', lift: '+6.8%', duration: '18 days', startDate: '2024-11-28', segment: 'Platform', exposureEvents: 1, variants: 2, learnings: 2, learningTags: ['Sharing', 'iOS'] },
];

// Learnings data
export const learningsData = [
  { id: 'L-001', expId: 'EXP-2835', expName: 'Template Discovery AI', outcome: 'Lost', learning: 'AI-powered recommendations need 3+ seconds to feel "considered" by users - instant results felt random', category: 'AI/ML', team: 'Growth', impact: 'High' },
  { id: 'L-002', expId: 'EXP-2835', expName: 'Template Discovery AI', outcome: 'Lost', learning: 'Users prefer category browsing over AI suggestions for creative tasks - control matters', category: 'Discovery', team: 'Growth', impact: 'High' },
  { id: 'L-003', expId: 'EXP-2835', expName: 'Template Discovery AI', outcome: 'Lost', learning: 'Performance degradation on mobile (400ms+) negated any UX benefits', category: 'Performance', team: 'Growth', impact: 'Medium' },
  { id: 'L-004', expId: 'EXP-2818', expName: 'Monetization Modal Timing', outcome: 'Lost', learning: 'Showing upsell within first 30 seconds increases bounce rate by 23%', category: 'Timing', team: 'Monetization', impact: 'High' },
  { id: 'L-005', expId: 'EXP-2818', expName: 'Monetization Modal Timing', outcome: 'Lost', learning: 'Users who see value first (complete 1 action) convert 2.4x better on upsell', category: 'User Behavior', team: 'Monetization', impact: 'High' },
  { id: 'L-006', expId: 'EXP-2818', expName: 'Monetization Modal Timing', outcome: 'Lost', learning: 'Modal fatigue is real - users who dismiss once are 67% likely to dismiss again', category: 'UX', team: 'Monetization', impact: 'Medium' },
  { id: 'L-007', expId: 'EXP-2818', expName: 'Monetization Modal Timing', outcome: 'Lost', learning: 'Best timing window is after 2nd successful export, not time-based', category: 'Monetization', team: 'Monetization', impact: 'High' },
  { id: 'L-008', expId: 'EXP-2825', expName: 'PWA Install Prompt', outcome: 'Inconclusive', learning: 'PWA install prompts work best after 3+ sessions, not on first visit', category: 'PWA', team: 'Growth', impact: 'Medium' },
  { id: 'L-009', expId: 'EXP-2825', expName: 'PWA Install Prompt', outcome: 'Inconclusive', learning: 'Mobile web users already satisfied with browser experience - low install motivation', category: 'Mobile Web', team: 'Growth', impact: 'Low' },
  { id: 'L-010', expId: 'EXP-2841', expName: 'Premium Upsell Modal', outcome: 'Won', learning: 'Showing exact price early (not "starting at") increases trust and conversion', category: 'Pricing', team: 'Monetization', impact: 'High' },
  { id: 'L-011', expId: 'EXP-2841', expName: 'Premium Upsell Modal', outcome: 'Won', learning: 'Feature comparison tables outperform bullet lists for premium features', category: 'UX', team: 'Monetization', impact: 'Medium' },
  { id: 'L-012', expId: 'EXP-2832', expName: 'Quick Actions CTA', outcome: 'Won', learning: 'Action-oriented CTAs ("Remove Background Now") beat generic ("Try Premium")', category: 'CTA', team: 'Growth', impact: 'High' },
  { id: 'L-013', expId: 'EXP-2832', expName: 'Quick Actions CTA', outcome: 'Won', learning: 'Partner context (Acrobat users) responds better to productivity messaging', category: 'Conversion', team: 'Growth', impact: 'Medium' },
];

// Learning categories with counts
export const learningCategories = [
  { name: 'UX Improvements', count: 43 },
  { name: 'Performance Insights', count: 38 },
  { name: 'Conversion Patterns', count: 16 },
];

// Recent learnings for card display
export const recentLearnings = [
  { 
    id: 1, 
    title: 'Checkout Flow V3', 
    team: 'Commerce', 
    learning: 'Reducing form fields from 8 to 5 increased completion by 23%', 
    daysAgo: 3 
  },
  { 
    id: 2, 
    title: 'Onboarding Modal', 
    team: 'Growth', 
    learning: 'Users prefer gradual onboarding over upfront modal - 15% higher drop-off', 
    daysAgo: 5 
  },
  { 
    id: 3, 
    title: 'Dark Mode Default', 
    team: 'Design System', 
    learning: 'Improve users average image light score in default 68% (oddprod topic)', 
    daysAgo: 9 
  },
  { 
    id: 4, 
    title: 'AI Suggestions', 
    team: 'AI/ML', 
    learning: 'More AI suggestions dropdown sidebar by 3.2x in engagement', 
    daysAgo: 11 
  },
];

// Stage comparison data - current vs previous quarter (all 4 stages)
export const stageComparison = [
  { 
    stage: 'Discovery + Dev', 
    current: 12.0, 
    previous: 14.2, 
    change: -2.2, 
    changePercent: -15.5,
    color: '#4169E1',
    benchmark: 10.0,
  },
  { 
    stage: 'Schedule', 
    current: 8.0, 
    previous: 8.5, 
    change: -0.5, 
    changePercent: -5.9,
    color: '#8B5CF6',
    benchmark: 7.0,
  },
  { 
    stage: 'Run', 
    current: 11.0, 
    previous: 13.2, 
    change: -2.2, 
    changePercent: -16.7,
    color: '#10B981',
    benchmark: 10.0,
  },
  { 
    stage: 'Analysis', 
    current: 4.1, 
    previous: 5.8, 
    change: -1.7, 
    changePercent: -29.3,
    color: '#F59E0B',
    benchmark: 3.0,
  },
];

// Cycle time trend data - LINE chart (all stages)
export const cycleTimeTrend = [
  { month: 'Aug', total: 50, discoveryDev: 15, schedule: 10, run: 18, analysis: 7 },
  { month: 'Sep', total: 48, discoveryDev: 14, schedule: 10, run: 17, analysis: 7 },
  { month: 'Oct', total: 45, discoveryDev: 14, schedule: 9, run: 16, analysis: 6 },
  { month: 'Nov', total: 42, discoveryDev: 13, schedule: 9, run: 15, analysis: 5 },
  { month: 'Dec', total: 38, discoveryDev: 12, schedule: 8, run: 13, analysis: 5 },
  { month: 'Jan', total: 35, discoveryDev: 12, schedule: 8, run: 11, analysis: 4 },
];

// Active cycle time outliers
export const activeCycleOutliers = [
  { id: 'EXP-2391', name: 'Checkout Flow Redesign', team: 'Commerce', stage: 'Run Time', expected: 14, actual: 28, variance: '+100%' },
  { id: 'EXP-2388', name: 'New Onboarding Flow', team: 'Onboarding', stage: 'Discovery', expected: 7, actual: 15, variance: '+114%' },
  { id: 'EXP-2385', name: 'AI Assistant Beta', team: 'AISA', stage: 'Analysis', expected: 3, actual: 8, variance: '+167%' },
  { id: 'EXP-2382', name: 'Mobile Nav Update', team: 'Mobile', stage: 'RTP Time', expected: 2, actual: 6, variance: '+200%' },
];

// Closed cycle time outliers with visual representation (4 stages)
export const closedCycleOutliers = [
  { 
    id: 'EXP-2398', 
    name: 'Video Export Compression Test', 
    team: 'Growth', 
    output: 'Win',
    total: 68,
    stages: { discovery: 16, schedule: 8, run: 38, analysis: 6 },
    bottleneck: 'Run',
    reason: 'Extended to reach statistical significance due to low traffic segment',
    variance: '+94%'
  },
  { 
    id: 'EXP-2365', 
    name: 'Enterprise SSO Flow', 
    team: 'Monetization', 
    output: 'Win',
    total: 72,
    stages: { discovery: 25, schedule: 6, run: 33, analysis: 8 },
    bottleneck: 'Discovery + Dev',
    reason: 'Complex security requirements, multiple stakeholder reviews',
    variance: '+105%'
  },
];

// Outlier experiments - legacy format
export const outlierExperiments = closedCycleOutliers;

// Statistics for outlier detection
export const cycleTimeStats = {
  mean: 35.1,
  median: 32,
  stdDev: 12.4,
  outlierThreshold: 59.9,
  totalExperiments: 84,
  outliersCount: 4,
  outliersPercent: 4.61,
};

// Segmentation usage data
export const segmentUsage = [
  { segment: 'All Users', count: 95, percentage: 60.5 },
  { segment: 'Authenticated', count: 72, percentage: 45.9 },
  { segment: 'Unauthenticated', count: 58, percentage: 36.9 },
  { segment: 'Country: Germany', count: 45, percentage: 28.7 },
  { segment: 'Language: English', count: 42, percentage: 26.8 },
  { segment: 'New User', count: 38, percentage: 24.2 },
  { segment: 'First time access Newer than', count: 32, percentage: 20.4 },
  { segment: 'Customer Type', count: 28, percentage: 17.8 },
  { segment: 'Free users', count: 24, percentage: 15.3 },
  { segment: 'Enterprise', count: 18, percentage: 11.5 },
];

// Feature usage data
export const featureUsage = [
  { feature: 'Mobile SDK', count: 82, percentage: 52.2 },
  { feature: 'First Time Access', count: 68, percentage: 43.3 },
  { feature: 'Experiment Results Dashboard', count: 55, percentage: 35.0 },
  { feature: 'Embed SDK', count: 42, percentage: 26.8 },
  { feature: 'Multiple Event Properties', count: 35, percentage: 22.3 },
  { feature: 'Direct RTP', count: 28, percentage: 17.8 },
];

// Product area data (Exposure Events)
export const productAreaUsage = [
  { area: 'Home-view-page', count: 78, percentage: 49.7 },
  { area: 'Remove-homepage-item', count: 52, percentage: 33.1 },
  { area: 'Access-App-complete', count: 45, percentage: 28.7 },
  { area: 'Select-home-tab', count: 38, percentage: 24.2 },
  { area: 'Select-home-k12-card', count: 32, percentage: 20.4 },
  { area: 'View-express-home', count: 25, percentage: 15.9 },
];

// Surface area data
export const surfaceAreaUsage = [
  { surface: 'desktop-web-browser', count: 60, percentage: 38.2 },
  { surface: 'mobile-app-android', count: 35, percentage: 22.3 },
  { surface: 'mobile-app-iOS', count: 25, percentage: 15.9 },
  { surface: 'desktop-web-pwa', count: 20, percentage: 12.7 },
  { surface: 'mobile-web-iOS', count: 15, percentage: 9.6 },
  { surface: 'mobile-web-android', count: 12, percentage: 7.6 },
  { surface: 'mobile-web-ipadOS', count: 10, percentage: 6.4 },
  { surface: 'mobile-app-ipadOS', count: 8, percentage: 5.1 },
];

// Team-specific usage data
export const teamSpecificUsage = {
  'Growth': {
    segmentation: [
      { segment: 'All Users', count: 25, percentage: 89.3 },
      { segment: 'Authenticated', count: 18, percentage: 64.3 },
      { segment: 'New User', count: 15, percentage: 53.6 },
      { segment: 'Country: Germany', count: 12, percentage: 42.9 },
    ],
    features: [
      { feature: 'Mobile SDK', count: 24, percentage: 85.7 },
      { feature: 'Experiment Results Dashboard', count: 20, percentage: 71.4 },
      { feature: 'Multiple Event Properties', count: 16, percentage: 57.1 },
    ],
    productArea: [
      { area: 'Home-view-page', count: 22, percentage: 78.6 },
      { area: 'Remove-homepage-item', count: 16, percentage: 57.1 },
      { area: 'Select-home-tab', count: 14, percentage: 50.0 },
      { area: 'Access-App-complete', count: 12, percentage: 42.9 },
    ],
    surfaceArea: [
      { surface: 'desktop-web-browser', count: 20, percentage: 71.4 },
      { surface: 'mobile-app-iOS', count: 12, percentage: 42.9 },
      { surface: 'mobile-app-android', count: 10, percentage: 35.7 },
    ],
  },
  'Mobile Native': {
    segmentation: [
      { segment: 'All Users', count: 16, percentage: 88.9 },
      { segment: 'Authenticated', count: 14, percentage: 77.8 },
      { segment: 'Language: English', count: 10, percentage: 55.6 },
    ],
    features: [
      { feature: 'Mobile SDK', count: 18, percentage: 100 },
      { feature: 'First Time Access', count: 12, percentage: 66.7 },
      { feature: 'Direct RTP', count: 8, percentage: 44.4 },
    ],
    productArea: [
      { area: 'Access-App-complete', count: 15, percentage: 83.3 },
      { area: 'View-express-home', count: 12, percentage: 66.7 },
      { area: 'Home-view-page', count: 10, percentage: 55.6 },
      { area: 'Remove-homepage-item', count: 6, percentage: 33.3 },
    ],
    surfaceArea: [
      { surface: 'mobile-app-iOS', count: 18, percentage: 100 },
      { surface: 'mobile-app-android', count: 16, percentage: 88.9 },
      { surface: 'mobile-app-ipadOS', count: 5, percentage: 27.8 },
    ],
  },
  'Onboarding': {
    segmentation: [
      { segment: 'New User', count: 14, percentage: 93.3 },
      { segment: 'Unauthenticated', count: 12, percentage: 80.0 },
      { segment: 'First time access Newer than', count: 10, percentage: 66.7 },
    ],
    features: [
      { feature: 'First Time Access', count: 14, percentage: 93.3 },
      { feature: 'Experiment Results Dashboard', count: 10, percentage: 66.7 },
      { feature: 'Mobile SDK', count: 8, percentage: 53.3 },
    ],
    productArea: [
      { area: 'Access-App-complete', count: 14, percentage: 93.3 },
      { area: 'View-express-home', count: 10, percentage: 66.7 },
      { area: 'Home-view-page', count: 8, percentage: 53.3 },
      { area: 'Remove-homepage-item', count: 4, percentage: 26.7 },
    ],
    surfaceArea: [
      { surface: 'desktop-web-browser', count: 12, percentage: 80.0 },
      { surface: 'mobile-app-iOS', count: 8, percentage: 53.3 },
      { surface: 'mobile-web-iOS', count: 6, percentage: 40.0 },
    ],
  },
  'Monetization': {
    segmentation: [
      { segment: 'Free users', count: 11, percentage: 91.7 },
      { segment: 'Customer Type', count: 10, percentage: 83.3 },
      { segment: 'Authenticated', count: 9, percentage: 75.0 },
    ],
    features: [
      { feature: 'Experiment Results Dashboard', count: 11, percentage: 91.7 },
      { feature: 'Multiple Event Properties', count: 9, percentage: 75.0 },
      { feature: 'Mobile SDK', count: 8, percentage: 66.7 },
    ],
    productArea: [
      { area: 'Home-view-page', count: 10, percentage: 83.3 },
      { area: 'Remove-homepage-item', count: 8, percentage: 66.7 },
      { area: 'Access-App-complete', count: 5, percentage: 41.7 },
    ],
    surfaceArea: [
      { surface: 'desktop-web-browser', count: 10, percentage: 83.3 },
      { surface: 'mobile-app-iOS', count: 6, percentage: 50.0 },
      { surface: 'mobile-app-android', count: 5, percentage: 41.7 },
    ],
  },
  'Education': {
    segmentation: [
      { segment: 'Authenticated', count: 8, percentage: 88.9 },
      { segment: 'Customer Type', count: 6, percentage: 66.7 },
      { segment: 'Enterprise', count: 5, percentage: 55.6 },
    ],
    features: [
      { feature: 'Experiment Results Dashboard', count: 8, percentage: 88.9 },
      { feature: 'Mobile SDK', count: 6, percentage: 66.7 },
      { feature: 'First Time Access', count: 5, percentage: 55.6 },
    ],
    productArea: [
      { area: 'Access-App-complete', count: 8, percentage: 88.9 },
      { area: 'Home-view-page', count: 5, percentage: 55.6 },
      { area: 'Remove-homepage-item', count: 3, percentage: 33.3 },
    ],
    surfaceArea: [
      { surface: 'desktop-web-browser', count: 8, percentage: 88.9 },
      { surface: 'mobile-web-iOS', count: 4, percentage: 44.4 },
      { surface: 'desktop-web-pwa', count: 2, percentage: 22.2 },
    ],
  },
  'Squirrel': {
    segmentation: [
      { segment: 'All Users', count: 5, percentage: 83.3 },
      { segment: 'Language: English', count: 4, percentage: 66.7 },
      { segment: 'Authenticated', count: 3, percentage: 50.0 },
    ],
    features: [
      { feature: 'Embed SDK', count: 6, percentage: 100 },
      { feature: 'Experiment Results Dashboard', count: 4, percentage: 66.7 },
      { feature: 'Mobile SDK', count: 3, percentage: 50.0 },
    ],
    productArea: [
      { area: 'Home-view-page', count: 5, percentage: 83.3 },
      { area: 'Select-home-k12-card', count: 4, percentage: 66.7 },
      { area: 'Remove-homepage-item', count: 3, percentage: 50.0 },
      { area: 'Access-App-complete', count: 2, percentage: 33.3 },
    ],
    surfaceArea: [
      { surface: 'desktop-web-browser', count: 5, percentage: 83.3 },
      { surface: 'desktop-web-pwa', count: 3, percentage: 50.0 },
    ],
  },
  'Commerce': {
    segmentation: [
      { segment: 'Free users', count: 3, percentage: 75.0 },
      { segment: 'Country: Germany', count: 2, percentage: 50.0 },
    ],
    features: [
      { feature: 'Experiment Results Dashboard', count: 4, percentage: 100 },
      { feature: 'Mobile SDK', count: 3, percentage: 75.0 },
    ],
    productArea: [
      { area: 'Home-view-page', count: 3, percentage: 75.0 },
      { area: 'Remove-homepage-item', count: 2, percentage: 50.0 },
    ],
    surfaceArea: [
      { surface: 'desktop-web-browser', count: 3, percentage: 75.0 },
      { surface: 'mobile-app-iOS', count: 2, percentage: 50.0 },
    ],
  },
  'Analytics': {
    segmentation: [],
    features: [],
    productArea: [],
    surfaceArea: [],
  },
};

// Top performing teams
export const topPerformers = [
  { rank: 1, team: 'Growth', experiments: 28, winRate: 52, avgLift: 12.4 },
  { rank: 2, team: 'Onboarding', experiments: 22, winRate: 48, avgLift: 10.1 },
  { rank: 3, team: 'Monetization', experiments: 18, winRate: 45, avgLift: 9.2 },
  { rank: 4, team: 'Education', experiments: 15, winRate: 42, avgLift: 8.5 },
  { rank: 5, team: 'Mobile Native', experiments: 18, winRate: 40, avgLift: 7.8 },
];

// Learnings by category for chart
export const learningsByCategory = [
  { category: 'UX', count: 3, color: '#8B5CF6' },
  { category: 'Monetization', count: 2, color: '#10B981' },
  { category: 'Performance', count: 1, color: '#F59E0B' },
  { category: 'AI/ML', count: 1, color: '#4169E1' },
  { category: 'User Behavior', count: 2, color: '#EC4899' },
  { category: 'CTA', count: 1, color: '#6366F1' },
  { category: 'Timing', count: 1, color: '#14B8A6' },
  { category: 'PWA', count: 1, color: '#F97316' },
];

// Top winning experiments for impact tab
export const topWinningExperiments = [
  { name: 'Quick Actions CTA Redesign', team: 'Growth', lift: '+12.3%', hasLearning: true },
  { name: 'Premium Upsell Flow', team: 'Monetization', lift: '+8.4%', hasLearning: true },
  { name: 'Onboarding Simplification', team: 'Onboarding', lift: '+7.1%', hasLearning: true },
  { name: 'Template Discovery v2', team: 'Growth', lift: '+5.8%', hasLearning: true },
];

// Active rollouts from experiments
export const activeRollouts = [
  { name: 'PFR - New Export Dialog', percentage: 100, users: '3M', type: 'PFR', startDate: '2025-01-10', team: 'Growth', impact: '+15.2%' },
  { name: 'ABC - Pro Users Onboarding', percentage: 100, users: '1M', type: 'ABC', startDate: '2025-01-08', team: 'Onboarding', impact: '+8.4%' },
  { name: 'PFR - AI Suggestions Panel', percentage: 60, users: '1.8M', type: 'PFR', startDate: '2025-01-12', team: 'AI/ML', impact: '+12.3%' },
  { name: 'PFR - Quick Actions Menu', percentage: 40, users: '1.2M', type: 'PFR', startDate: '2025-01-15', team: 'Growth', impact: '+9.7%' },
];

// Experimentation Rate data
export const experimentationRate = {
  current: 37, // 37% of user-facing work is tested
  previous: 32, // Last quarter
  change: 5,
  totalExperiments: 156,
  totalUserFacingIssues: 420,
  target: 50,
};

// Lifecycle funnel data for Platform Overview
export const lifecycleFunnel = [
  { status: 'Scheduled', count: 24, percentage: 15, color: '#8B5CF6' },
  { status: 'In-Flight', count: 43, percentage: 28, color: '#F59E0B' },
  { status: 'Archived', count: 89, percentage: 57, color: '#10B981' },
  { status: 'Total Experiments', count: 156, percentage: 100, color: '#4169E1' },
];

// Business Impact metrics
export const businessImpact = {
  // Row 1: Experiment Results
  avgLift: {
    value: '+12.4%',
    change: '+2.1%',
    changeType: 'positive',
  },
  usersImpacted: {
    value: '2.4M',
    change: '+400K',
    changeType: 'positive',
  },
  archivedExperiments: {
    value: 89,
    percentage: '57%',
    change: '+8',
    changeType: 'positive',
  },
  
  // Row 2: Rollout Impact
  influencedMAU: {
    value: '8.2M',
    percentage: '42%',
    change: '+1.2M',
    changeType: 'positive',
  },
  experimentsRolledOut: {
    value: 28,
    change: '+4',
    changeType: 'positive',
  },
  avgTimeToRollout: {
    value: '12 days',
    change: '-3 days',
    changeType: 'positive',
  },
};

// Team test coverage data
export const teamTestCoverage = [
  { team: 'Growth', experiments: 34, userFacingIssues: 68, testCoverage: 50 },
  { team: 'Mobile Native', experiments: 28, userFacingIssues: 95, testCoverage: 29 },
  { team: 'Onboarding', experiments: 22, userFacingIssues: 42, testCoverage: 52 },
  { team: 'Monetization', experiments: 18, userFacingIssues: 24, testCoverage: 75 },
  { team: 'Education', experiments: 15, userFacingIssues: 30, testCoverage: 50 },
  { team: 'Squirrel', experiments: 12, userFacingIssues: 28, testCoverage: 43 },
];

// Team workload data (current capacity)
export const teamWorkload = [
  { team: 'Growth', active: 8, scheduled: 3, capacity: 'High' },
  { team: 'Mobile Native', active: 5, scheduled: 2, capacity: 'Medium' },
  { team: 'Onboarding', active: 4, scheduled: 1, capacity: 'Medium' },
  { team: 'Monetization', active: 3, scheduled: 2, capacity: 'Low' },
  { team: 'Education', active: 2, scheduled: 1, capacity: 'Low' },
  { team: 'Squirrel', active: 1, scheduled: 0, capacity: 'Low' },
];

// Helper function to adjust data based on time period
// Base data represents FY Q2 (current quarter)
const periodMultipliers = {
  'FY Q1': 0.70,  // Oct-Dec 2025
  'FY Q2': 1.00,  // Jan-Mar 2026 (current)
  'FY Q3': 1.20,  // Apr-Jun 2026 (projection)
  'FY Q4': 1.30,  // Jul-Sep 2026 (planned)
  'YTD': 1.80,    // Year to date (cumulative)
  '2025': 2.50,   // Full year 2025
};

export const getDataForPeriod = (timeRange, filters = { teams: [], teamCategory: 'All', tenant: 'All' }) => {
  const multiplier = periodMultipliers[timeRange] || 1.0;
  
  // Apply filters to team performance
  let filteredTeamPerformance = teamPerformance.map(team => ({
    ...team,
    experiments: Math.round(team.experiments * multiplier),
    learnings: Math.round(team.learnings * multiplier),
  }));

  // Filter by selected teams
  if (filters.teams && filters.teams.length > 0) {
    filteredTeamPerformance = filteredTeamPerformance.filter(team => 
      filters.teams.includes(team.team)
    );
  }

  // Filter by team category
  if (filters.teamCategory && filters.teamCategory !== 'All') {
    filteredTeamPerformance = filteredTeamPerformance.filter(team => 
      team.type === filters.teamCategory
    );
  }

  // Filter by tenant
  if (filters.tenant && filters.tenant !== 'All') {
    filteredTeamPerformance = filteredTeamPerformance.filter(team => 
      team.tenant === filters.tenant
    );
  }

  // Calculate adjusted metrics based on filtered teams
  const totalFilteredExperiments = filteredTeamPerformance.reduce((sum, team) => sum + team.experiments, 0);
  const totalFilteredLearnings = filteredTeamPerformance.reduce((sum, team) => sum + team.learnings, 0);
  const filteredActiveTeams = filteredTeamPerformance.filter(t => t.experiments > 0).length;
  const avgExperimentsPerTeam = filteredActiveTeams > 0 ? parseFloat((totalFilteredExperiments / filteredActiveTeams).toFixed(1)) : 0;
  
  return {
    // Filtered team performance metrics
    teamPerformance: filteredTeamPerformance,
    
    // Adjust metrics based on filtered data
    metrics: {
      totalExperiments: totalFilteredExperiments || Math.round(157 * multiplier),
      activeExperiments: timeRange === '2025' ? 0 : Math.round(42 * multiplier),
      completedThisMonth: Math.round(28 * multiplier),
      avgExperimentsPerTeam: avgExperimentsPerTeam || parseFloat((5.2 * multiplier).toFixed(1)),
      activeTeams: filteredActiveTeams || (timeRange === 'FY Q1' ? 5 : (timeRange === 'FY Q2' ? 6 : 6)),
      newTeams: timeRange === 'FY Q1' ? 1 : (timeRange === 'FY Q2' ? 2 : Math.round(2 * Math.min(multiplier, 1.5))),
      experimentationRate: 47,
      teamPenetration: timeRange === 'FY Q1' ? 62 : (timeRange === 'FY Q2' ? 67 : Math.min(75, 67 + Math.round((multiplier - 1) * 15))),
      avgVelocity: 14,
      atRiskExperiments: timeRange === '2025' ? 0 : Math.round(8 * Math.min(multiplier, 1)),
      delayedClosures: Math.round(5 * multiplier),
      avgWinRate: 38,
      avgLift: 8.7,
      documentedLearnings: totalFilteredLearnings || Math.round(45 * multiplier),
      captureRate: 78,
    },
    
    // Adjust top performers based on filtered teams
    topPerformers: filteredTeamPerformance
      .sort((a, b) => b.experiments - a.experiments)
      .slice(0, 5)
      .map((team, index) => ({
        rank: index + 1,
        team: team.team,
        experiments: team.experiments,
        winRate: team.winRate,
        avgLift: team.avgLift,
      })),
    
    // Monthly data adjusted for quarters
    monthlyData: timeRange === 'FY Q1' 
      ? [
          { month: 'Dec', jiraCreated: 44, hzCreated: 31, hzCompleted: 25, hzWin: 10, jiraRollout: 8 },
          { month: 'Jan', jiraCreated: 55, hzCreated: 42, hzCompleted: 32, hzWin: 14, jiraRollout: 11 },
          { month: 'Feb', jiraCreated: 52, hzCreated: 38, hzCompleted: 30, hzWin: 13, jiraRollout: 10 },
        ]
      : timeRange === 'FY Q2'
      ? [
          { month: 'Mar', jiraCreated: 58, hzCreated: 45, hzCompleted: 35, hzWin: 15, jiraRollout: 12 },
          { month: 'Apr', jiraCreated: 62, hzCreated: 48, hzCompleted: 38, hzWin: 16, jiraRollout: 13 },
          { month: 'May', jiraCreated: 66, hzCreated: 52, hzCompleted: 42, hzWin: 18, jiraRollout: 14 },
        ]
      : timeRange === 'FY Q3'
      ? [
          { month: 'Jun', jiraCreated: 70, hzCreated: 56, hzCompleted: 45, hzWin: 19, jiraRollout: 15 },
          { month: 'Jul', jiraCreated: 72, hzCreated: 58, hzCompleted: 46, hzWin: 20, jiraRollout: 16 },
          { month: 'Aug', jiraCreated: 76, hzCreated: 62, hzCompleted: 50, hzWin: 21, jiraRollout: 17 },
        ]
      : timeRange === 'FY Q4'
      ? [
          { month: 'Sep', jiraCreated: 80, hzCreated: 66, hzCompleted: 52, hzWin: 22, jiraRollout: 18 },
          { month: 'Oct', jiraCreated: 40, hzCreated: 28, hzCompleted: 21, hzWin: 9, jiraRollout: 7 },
          { month: 'Nov', jiraCreated: 48, hzCreated: 35, hzCompleted: 28, hzWin: 12, jiraRollout: 9 },
        ]
      : timeRange === 'YTD'
      ? [
          { month: 'Dec', jiraCreated: 44, hzCreated: 31, hzCompleted: 25, hzWin: 10, jiraRollout: 8 },
          { month: 'Jan', jiraCreated: 55, hzCreated: 42, hzCompleted: 32, hzWin: 14, jiraRollout: 11 },
          { month: 'Feb', jiraCreated: 52, hzCreated: 38, hzCompleted: 30, hzWin: 13, jiraRollout: 10 },
          { month: 'Mar', jiraCreated: 58, hzCreated: 45, hzCompleted: 35, hzWin: 15, jiraRollout: 12 },
          { month: 'Apr', jiraCreated: 62, hzCreated: 48, hzCompleted: 38, hzWin: 16, jiraRollout: 13 },
          { month: 'May', jiraCreated: 66, hzCreated: 52, hzCompleted: 42, hzWin: 18, jiraRollout: 14 },
        ]
      : [ // 2025 full year
          { month: 'Jan', jiraCreated: 30, hzCreated: 20, hzCompleted: 15, hzWin: 6, jiraRollout: 4 },
          { month: 'Feb', jiraCreated: 32, hzCreated: 22, hzCompleted: 16, hzWin: 7, jiraRollout: 5 },
          { month: 'Mar', jiraCreated: 35, hzCreated: 25, hzCompleted: 18, hzWin: 8, jiraRollout: 5 },
          { month: 'Apr', jiraCreated: 38, hzCreated: 28, hzCompleted: 20, hzWin: 9, jiraRollout: 6 },
          { month: 'May', jiraCreated: 40, hzCreated: 30, hzCompleted: 22, hzWin: 10, jiraRollout: 7 },
          { month: 'Jun', jiraCreated: 42, hzCreated: 32, hzCompleted: 24, hzWin: 11, jiraRollout: 7 },
          { month: 'Jul', jiraCreated: 18, hzCreated: 12, hzCompleted: 8, hzWin: 3, jiraRollout: 2 },
          { month: 'Aug', jiraCreated: 26, hzCreated: 18, hzCompleted: 14, hzWin: 5, jiraRollout: 4 },
          { month: 'Sep', jiraCreated: 32, hzCreated: 22, hzCompleted: 16, hzWin: 7, jiraRollout: 5 },
          { month: 'Oct', jiraCreated: 40, hzCreated: 28, hzCompleted: 21, hzWin: 9, jiraRollout: 7 },
          { month: 'Nov', jiraCreated: 48, hzCreated: 35, hzCompleted: 28, hzWin: 12, jiraRollout: 9 },
          { month: 'Dec', jiraCreated: 44, hzCreated: 31, hzCompleted: 25, hzWin: 10, jiraRollout: 8 },
        ],
  };
};
