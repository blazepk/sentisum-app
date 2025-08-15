import { Grid3X3, Target, Eye, Zap, Square, Edit3 } from 'lucide-react'
import type { LayoutTemplate, Widget } from '../types/dashboard'

export const availableWidgets: Widget[] = [
  { id: 'volume', type: 'metric', title: 'Total Volume', size: 'small', data: { value: '58,873', change: '+1,213' }, color: 'blue' },
  { id: 'sentiment', type: 'metric', title: 'Sentiment', size: 'small', data: { value: '93%', change: '+3' }, color: 'green' },
  { id: 'csat', type: 'metric', title: 'CSAT', size: 'small', data: { value: '90%', change: '0' }, color: 'purple' },
  { id: 'coverage', type: 'metric', title: 'Coverage', size: 'small', data: { value: '100%', change: '0' }, color: 'emerald' },
  { id: 'trend-chart', type: 'chart', title: 'Contact Trend', size: 'large', color: 'blue' },
  { id: 'top-issues', type: 'list', title: 'Top Issues', size: 'medium', color: 'red' },
  { id: 'recent-tickets', type: 'activity', title: 'Recent Tickets', size: 'medium', color: 'blue' },
  { id: 'sentiment-breakdown', type: 'chart', title: 'Sentiment Breakdown', size: 'medium', color: 'green' },
]

export const layoutTemplates: LayoutTemplate[] = [
  {
    id: 'classic',
    name: 'Classic Dashboard',
    description: 'Traditional layout with metrics at top and detailed views below',
    icon: Grid3X3,
    grid: 'grid-cols-12 grid-rows-6',
    widgets: [
      { ...availableWidgets[0], size: 'small' },
      { ...availableWidgets[1], size: 'small' },
      { ...availableWidgets[2], size: 'small' },
      { ...availableWidgets[3], size: 'small' },
      { ...availableWidgets[4], size: 'large' },
      { ...availableWidgets[5], size: 'medium' },
      { ...availableWidgets[6], size: 'medium' },
    ],
  },
  {
    id: 'focus',
    name: 'Focus View',
    description: 'Emphasizes key metrics with larger visual elements',
    icon: Target,
    grid: 'grid-cols-8 grid-rows-5',
    widgets: [
      { ...availableWidgets[0], size: 'large' },
      { ...availableWidgets[1], size: 'large' },
      { ...availableWidgets[4], size: 'extra-large' },
      { ...availableWidgets[5], size: 'medium' },
    ],
  },
  {
    id: 'executive',
    name: 'Executive Summary',
    description: 'High-level overview perfect for leadership dashboards',
    icon: Eye,
    grid: 'grid-cols-6 grid-rows-4',
    widgets: [
      { ...availableWidgets[0], size: 'medium' },
      { ...availableWidgets[1], size: 'medium' },
      { ...availableWidgets[2], size: 'medium' },
      { ...availableWidgets[4], size: 'large' },
      { ...availableWidgets[7], size: 'medium' },
    ],
  },
  {
    id: 'operational',
    name: 'Operations Center',
    description: 'Detailed view for day-to-day operations and monitoring',
    icon: Zap,
    grid: 'grid-cols-12 grid-rows-8',
    widgets: [...availableWidgets.map((w) => ({ ...w, size: 'small' as const }))],
  },
  {
    id: 'minimal',
    name: 'Minimal View',
    description: 'Clean, distraction-free layout focusing on essentials',
    icon: Square,
    grid: 'grid-cols-4 grid-rows-3',
    widgets: [
      { ...availableWidgets[0], size: 'large' },
      { ...availableWidgets[1], size: 'large' },
      { ...availableWidgets[4], size: 'extra-large' },
    ],
  },
  {
    id: 'custom',
    name: 'Custom Layout',
    description: 'Build your own personalized dashboard layout',
    icon: Edit3,
    grid: 'grid-cols-12 grid-rows-6',
    widgets: [],
  },
]

