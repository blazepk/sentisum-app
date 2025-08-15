import React from 'react'
import { X, CheckCircle } from 'lucide-react'
import type { LayoutTemplate } from '../../types/dashboard'
import { getWidgetSizeClass } from '../../utils/widget'

type Props = {
  isOpen: boolean
  templates: LayoutTemplate[]
  selectedLayoutId: string
  onClose: () => void
  onSelect: (layoutId: string) => void
}

const LayoutSelectorModal: React.FC<Props> = ({ isOpen, templates, selectedLayoutId, onClose, onSelect }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Choose Dashboard Layout</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Close layout selector">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((layout) => {
            const Icon = layout.icon
            const isSelected = selectedLayoutId === layout.id
            return (
              <button
                type="button"
                key={layout.id}
                onClick={() => {
                  onSelect(layout.id)
                  onClose()
                }}
                className={`text-left group cursor-pointer p-4 border-2 rounded-xl transition-all duration-200 hover:shadow-lg ${
                  isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{layout.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{layout.description}</p>
                <div className="h-24 bg-gray-50 rounded-lg border overflow-hidden">
                  <div className={`grid ${layout.grid} gap-1 h-full p-2`}>
                    {layout.widgets.slice(0, 8).map((widget) => (
                      <div key={widget.id} className={`bg-white rounded border ${getWidgetSizeClass(widget.size)} min-h-[8px] text-[6px]`} />
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{layout.widgets.length} widgets</span>
                  {isSelected && (
                    <div className="flex items-center space-x-1 text-blue-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-medium">Selected</span>
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LayoutSelectorModal

