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
  { team: 'Growth', experiments: 28, winRate: 48, avgLift: 9.2, avgDuration: 14, learnings: 12, captureRate: 89, type: 'PLG' },
  { team: 'Mobile Native', experiments: 18, winRate: 38, avgLift: 6.5, avgDuration: 21, learnings: 8, captureRate: 75, type: 'Feature Team' },
  { team: 'Onboarding', experiments: 15, winRate: 47, avgLift: 12.6, avgDuration: 18, learnings: 9, captureRate: 80, type: 'PLG' },
  { team: 'Monetization', experiments: 12, winRate: 32, avgLift: 15.2, avgDuration: 28, learnings: 6, captureRate: 92, type: 'Feature Team' },
  { team: 'Education', experiments: 9, winRate: 44, avgLift: 9.8, avgDuration: 16, learnings: 3, captureRate: 67, type: 'Feature Team' },
  { team: 'Squirrel', experiments: 6, winRate: 50, avgLift: 1.0, avgDuration: 12, learnings: 5, captureRate: 50, type: 'Feature Team' },
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

// Segmentation/Feature usage data - horizontal bar
export const segmentUsage = [
  { segment: 'Platform-based', count: 65 },
  { segment: 'First Access Time', count: 40 },
  { segment: 'Region', count: 35 },
  { segment: 'User Properties', count: 30 },
  { segment: 'User Lifetime', count: 25 },
  { segment: 'Device Type', count: 20 },
  { segment: 'Geographic', count: 15 },
  { segment: 'Device Origin', count: 10 },
];

// Top performing teams
export const topPerformers = [
  { rank: 1, team: 'Firefly', experiments: 28, winRate: 52, avgLift: 12.4 },
  { rank: 2, team: 'Lightroom', experiments: 16, winRate: 45, avgLift: 9.1 },
  { rank: 3, team: 'Photoshop', experiments: 24, winRate: 42, avgLift: 8.2 },
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
