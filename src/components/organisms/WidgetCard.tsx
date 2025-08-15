import React from 'react'
import { GripVertical, Maximize2, X } from 'lucide-react'
import type { Widget } from '../../types/dashboard'
import { getWidgetSizeClass } from '../../utils/widget'

const WidgetCard: React.FC<{
  widget: Widget
  isCustomizing: boolean
  isSelected: boolean
  onSelect: (id: string) => void
  children: React.ReactNode
}> = ({ widget, isCustomizing, isSelected, onSelect, children }) => (
  <div
    role={isCustomizing ? 'button' : undefined}
    tabIndex={isCustomizing ? 0 : -1}
    onClick={() => isCustomizing && onSelect(widget.id)}
    onKeyDown={(e) => {
      if (!isCustomizing) return
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onSelect(widget.id)
      }
    }}
    className={`group relative bg-white/60 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/80 hover:shadow-xl transition-all duration-300 ${getWidgetSizeClass(widget.size)} ${
      isCustomizing ? 'cursor-move hover:border-blue-300' : 'cursor-default'
    } ${isSelected ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
  >
    {isCustomizing && (
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
        <button className="p-1 bg-white rounded shadow-sm hover:bg-gray-50" aria-label="Drag">
          <GripVertical className="w-4 h-4 text-gray-400" />
        </button>
        <button className="p-1 bg-white rounded shadow-sm hover:bg-gray-50" aria-label="Resize">
          <Maximize2 className="w-4 h-4 text-gray-400" />
        </button>
        <button className="p-1 bg-white rounded shadow-sm hover:bg-gray-50 text-red-500" aria-label="Remove">
          <X className="w-4 h-4" />
        </button>
      </div>
    )}
    <div className={isCustomizing ? 'pointer-events-none' : ''}>{children}</div>
    {isCustomizing && (
      <div className="absolute bottom-2 right-2 w-3 h-3 bg-gray-300 rounded-sm cursor-se-resize opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-400" />
      </div>
    )}
  </div>
)

export default WidgetCard

