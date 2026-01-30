# Experimentation Platform Dashboard

A comprehensive UI-only web prototype for Adobe's Experimentation Platform Dashboard, designed to provide actionable insights into experimentation velocity, team performance, quality metrics, and business impact.

![Dashboard Preview](https://img.shields.io/badge/Status-Prototype-blue)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)

## 🎯 Overview

This dashboard serves as a centralized hub for monitoring and optimizing the experimentation platform at Adobe. It provides different views tailored to specific personas, from operational control centers to strategic executive summaries.

## 🗂️ Dashboard Tabs

### 1. **Control Center** (Experiments Status)
**Target Personas:** EEM, EPM, Feature PMs + Engineers

Real-time operational snapshot for daily monitoring:
- Quick Stats (Scheduled, Active, In Analysis, Pending Decisions)
- Needs Immediate Attention (at-risk experiments)
- Today's Activity (recent changes and updates)
- Active experiments table

### 2. **Platform Overview** (Executive Summary)
**Target Personas:** Directors, VP (bi-weekly), EPM, EEM, Data Science

Strategic overview combining key metrics and business impact:
- **Hero Metrics:** Total Experiments, Win Rate, Experimentation Rate, Active Teams, Learnings Captured, Invalid Rate
- **Program Health:** Experiment Velocity (line chart), Outcome Distribution (donut chart)
- **Coverage & Adoption:** Surface Coverage, Experiments Type
- **Business Impact:** Avg Lift, Users Impacted, Archived Experiments, Influenced MAU, Experiments Rolled Out, Avg Time to Rollout
- **Active Rollouts** table

### 3. **Process Efficiency** (Velocity & Cycle Time)
**Target Personas:** EEM, EPM, Directors, VP

Deep dive into process performance and bottlenecks:
- **4 Stages Cycle Time:** Discovery + Dev → Schedule → Run → Analysis (to decision)
- Current Cycle Time hero card with comparison metrics
- Cycle Time Trend (6-month line chart with all stages)
- Stage-by-Stage Analysis (horizontal stacked bars)
- Active Cycle Time Outliers
- Closed Cycle Time Outliers with bottleneck identification

### 4. **Team Adoption & Performance**
**Target Personas:** Feature Directors, Directors, EPM, VP

Team-level performance tracking and comparison:
- Team performance metrics (Win Rate, Cycle Time, Learnings)
- **Experimentation Rate** prominent card
- Team Performance Comparison table (with Test Coverage)
- **Test Coverage Insights:** Bar chart + Donut chart (High/Medium/Low)
- **Current Team Workload** table

### 5. **Knowledge Repository** (Learnings)
**Target Personas:** Feature Directors, EPM, Directors, VP

Centralized learning capture and categorization:
- Learnings captured metrics
- Category-based filtering (Product, Marketing, Technical, UX, Pricing)
- Learning cards with metadata (team, date, confidence, tags)
- Search and filter capabilities

### 6. **Platform Health** (Quality & Performance)
**Target Personas:** EEM, Directors, Data Science

Platform quality and reliability monitoring:
- Quality metrics (Consistency Rate, Invalid Rate, SRM Rate, Data Quality)
- Quality trend over time
- Issue breakdown by type
- Top user-facing issues table

## 🎨 Design Principles

- **Persona-Driven:** Each tab is optimized for specific user roles and their objectives
- **Actionable Insights:** Focus on metrics that drive decisions, not just data display
- **Hierarchy of Information:** Hero cards → Charts → Detailed tables
- **Status Indicators:** Color-coded badges and progress bars for quick scanning
- **Responsive Layout:** Grid-based design that adapts to different screen sizes

## 🛠️ Tech Stack

- **Framework:** React 18.3 with functional components and hooks
- **Build Tool:** Vite 6.0 for fast development and optimized builds
- **Styling:** Tailwind CSS 3.4 for utility-first responsive design
- **Charts:** Recharts for interactive data visualizations
- **Icons:** Lucide React for consistent iconography
- **State Management:** React hooks (useState, useMemo) for local state

## 📊 Key Metrics Tracked

### Process Metrics
- Cycle Time (Discovery + Dev, Schedule, Run, Analysis)
- Experiment Velocity (created, completed, win experiments)
- Stage-by-Stage Performance

### Quality Metrics
- Win Rate
- Invalid Rate
- Consistency Rate (SRM)
- Data Quality Score

### Adoption Metrics
- Active Teams
- Experimentation Rate (experiments / user-facing issues)
- Test Coverage by Team
- Surface Coverage

### Business Impact
- Average Lift
- Users Impacted
- Influenced MAU
- Experiments Rolled Out
- Avg Time to Rollout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/acrijman-sudo/Experimentation-Platform-Dashboard.git

# Navigate to project directory
cd Experimentation-Platform-Dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

The dashboard will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 📁 Project Structure

```
experimentation-dashboard/
├── src/
│   ├── components/
│   │   ├── tabs/
│   │   │   ├── StatusTab.jsx        # Control Center
│   │   │   ├── OverviewTab.jsx      # Platform Overview
│   │   │   ├── VelocityTab.jsx      # Process Efficiency
│   │   │   ├── TeamsTab.jsx         # Team Adoption & Performance
│   │   │   ├── LearningsTab.jsx     # Knowledge Repository
│   │   │   └── QualityTab.jsx       # Platform Health
│   │   ├── Header.jsx               # Navigation header
│   │   ├── MetricCard.jsx           # Reusable metric card
│   │   └── StatusBadge.jsx          # Status indicator
│   ├── data/
│   │   └── mockData.js              # Mock data for prototype
│   ├── App.jsx                      # Main app component
│   └── main.jsx                     # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎭 Target Personas

1. **Experimentation Product Manager (EPM)** - Platform vision and go-to-market
2. **Experimentation Engineering Manager (EEM)** - Platform development
3. **Experimentation Directors** - Platform evolution, adoption, and impact oversight
4. **Experiments Data Science** - Data monitoring and platform impact analysis
5. **Feature Product Manager & Engineers** - Experiment development and execution
6. **Feature Directors** - Team evolution and impact monitoring
7. **VP** - Product success and team/platform impact

## 🔄 Data Flow

This is a **UI-only prototype** with mock data. In a production environment:
- All data would be fetched from backend APIs
- Real-time updates via WebSocket or polling
- User authentication and role-based access control
- Team filtering ("My Team" vs "Overall") with comparison view
- Drill-down capabilities for detailed analysis

## 🎯 Future Enhancements

- [ ] Implement "My Team" filtering with comparison layer
- [ ] Add drill-down views for detailed experiment analysis
- [ ] Export capabilities (PDF, CSV)
- [ ] Custom date range selection
- [ ] Real-time notifications for at-risk experiments
- [ ] Integration with JIRA and experimentation platform APIs
- [ ] Advanced filtering and search across all tabs
- [ ] Custom dashboard views per persona
- [ ] Historical trend analysis

## 📝 License

This project is a prototype for internal Adobe use.

## 👥 Contributors

- Adrian Crijman (@acrijman-sudo)

## 📧 Contact

For questions or feedback about this dashboard, please contact the Experimentation Platform team.

---

**Built with ❤️ for Adobe's Experimentation Platform**
