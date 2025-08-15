export type WidgetType = 'metric' | 'chart' | 'table' | 'list' | 'activity'
export type WidgetSize = 'small' | 'medium' | 'large' | 'extra-large'

// Base properties shared by all widgets
interface WidgetBase {
  id: string
  type: WidgetType
  title: string
  size: WidgetSize
  color?: string
}

export type MetricData = {
  value: string | number
  change?: string | number
}

export interface MetricWidget extends WidgetBase {
  type: 'metric'
  data: MetricData
  color: string
}

export interface ChartWidget extends WidgetBase {
  type: 'chart'
}

export interface ListWidget extends WidgetBase {
  type: 'list'
}

export interface ActivityWidget extends WidgetBase {
  type: 'activity'
}

export type Widget = MetricWidget | ChartWidget | ListWidget | ActivityWidget

export interface LayoutTemplate {
  id: string
  name: string
  description: string
  icon: React.ElementType
  grid: string
  widgets: Widget[]
}
