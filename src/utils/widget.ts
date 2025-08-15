import type { WidgetSize } from '../types/dashboard'

export const getWidgetSizeClass = (size: WidgetSize): string => {
  switch (size) {
    case 'small':
      return 'col-span-3 row-span-1'
    case 'medium':
      return 'col-span-4 row-span-2'
    case 'large':
      return 'col-span-6 row-span-2'
    case 'extra-large':
      return 'col-span-8 row-span-3'
    default:
      return 'col-span-3 row-span-1'
  }
}

export const getWidgetColorClass = (color: string): string => {
  switch (color) {
    case 'blue':
      return 'from-blue-500 to-cyan-500 bg-blue-50'
    case 'green':
      return 'from-emerald-500 to-teal-500 bg-emerald-50'
    case 'purple':
      return 'from-purple-500 to-indigo-500 bg-purple-50'
    case 'emerald':
      return 'from-green-500 to-emerald-500 bg-green-50'
    case 'red':
      return 'from-red-500 to-pink-500 bg-red-50'
    default:
      return 'from-gray-500 to-slate-500 bg-gray-50'
  }
}

