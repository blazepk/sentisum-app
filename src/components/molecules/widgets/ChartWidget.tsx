import React from 'react'
import { BarChart3 } from 'lucide-react'

type Props = { title: string }

const ChartWidget: React.FC<Props> = ({ title }) => (
  <div className="h-full">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
      <BarChart3 className="w-12 h-12 text-blue-500" />
    </div>
  </div>
)

export default ChartWidget

