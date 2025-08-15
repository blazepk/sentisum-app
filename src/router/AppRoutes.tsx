import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../pages/DashboardLayout'
import UnifiedInsights from '../pages/UnifiedInsights'
import Discover from '../pages/Discover'
import TestingDashboard from '../pages/TestingDashboard'
import SummaryTable from '../pages/SummaryTable'

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<UnifiedInsights />} />
    <Route path="/discover" element={<Discover />} />
    <Route path="/dashboards/testing" element={<TestingDashboard />} />
    <Route path="/summary" element={<SummaryTable />} />
    <Route path="/builder" element={<DashboardLayout />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default AppRoutes

