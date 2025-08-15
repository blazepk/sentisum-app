import React from 'react'
import { Volume2, ArrowUp } from 'lucide-react'
import type { MetricData } from '../../../types/dashboard'
import { getWidgetColorClass } from '../../../utils/widget'

type Props = {
  title: string
  data: MetricData
  color?: string
}

const MetricWidget: React.FC<Props> = ({ title, data, color = 'blue' }) => (
  <div className="h-full flex flex-col justify-between">
    <div className="flex items-center justify-between mb-4">
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getWidgetColorClass(color)} flex items-center justify-center shadow-inner`}>
        <Volume2 className="w-6 h-6 text-white" />
      </div>
      <div className="flex items-center space-x-1 text-xs font-semibold px-2 py-1 rounded-full text-emerald-700 bg-emerald-100">
        <ArrowUp className="w-3 h-3" />
        <span>+2.1%</span>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-1">{data?.value ?? '0'}</p>
      <p className="text-sm text-gray-500">
        <span className="text-emerald-600">{data?.change ?? '+0'}</span> from last week
      </p>
    </div>
  </div>
)

export default MetricWidget

