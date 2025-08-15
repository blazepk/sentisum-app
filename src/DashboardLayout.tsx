import React, { useState, useEffect } from 'react'
import { Layout, Edit3, Save, Plus } from 'lucide-react'
import type { Widget } from './types/dashboard'
import { layoutTemplates } from './constants/layouts'
import MetricWidget from './components/molecules/widgets/MetricWidget'
import ChartWidget from './components/molecules/widgets/ChartWidget'
import ListWidget from './components/molecules/widgets/ListWidget'
import ActivityWidget from './components/molecules/widgets/ActivityWidget'
import LayoutSelectorModal from './components/organisms/LayoutSelectorModal'
import WidgetCard from './components/organisms/WidgetCard'
import { useLayout } from './context/LayoutContext'

type DashboardLayoutProps = object

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
  const [isCustomizing, setIsCustomizing] = useState<boolean>(false)
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null)
  const [showLayoutSelector, setShowLayoutSelector] = useState<boolean>(false)

  // use shared layout state
  const { selectedLayoutId, setSelectedLayoutId, currentLayout } = useLayout()

  const [selectedLayout, setSelectedLayout] = useState<string>(selectedLayoutId)

  useEffect(() => {
    setSelectedLayoutId(selectedLayout)
  }, [selectedLayout, setSelectedLayoutId])

  const renderWidgetContent = (widget: Widget) => {
    switch (widget.type) {
      case 'metric':
        return (
          <MetricWidget title={widget.title} data={widget.data} color={widget.color} />
        )

      case 'chart':
        return <ChartWidget title={widget.title} />

      case 'list':
        return (
          <ListWidget title={widget.title} items={['Repetitive Issues', 'Missing Ingredients', 'Credit Not Applied']} />
        )

      case 'activity': {
        const items = ['New ticket #2936628', 'Resolved #2936627', 'Escalated #2936624']
        return <ActivityWidget title={widget.title} items={items} />
      }

      default:
        return <div>Widget content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Layout className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Dashboard Builder
                </h1>
              </div>
              <div className="h-6 w-px bg-gray-300 ml-4" />
              <span className="text-sm text-gray-500 font-medium">
                {currentLayout.name}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="px-3 py-2 rounded-lg border bg-white/70 text-sm">Back to App</a>
              <button
                onClick={() => setShowLayoutSelector(!showLayoutSelector)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur border border-white/20 rounded-lg text-sm font-medium hover:bg-white/80 transition-all duration-200"
              >
                <Layout className="w-4 h-4" />
                <span>Change Layout</span>
              </button>
              <button
                onClick={() => setIsCustomizing(!isCustomizing)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isCustomizing
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <Edit3 className="w-4 h-4" />
                <span>{isCustomizing ? "Exit Customize" : "Customize"}</span>
              </button>
              {isCustomizing && (
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-200">
                  <Save className="w-4 h-4" />
                  <span>Save Layout</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <LayoutSelectorModal
        isOpen={showLayoutSelector}
        templates={layoutTemplates}
        selectedLayoutId={selectedLayout}
        onClose={() => setShowLayoutSelector(false)}
        onSelect={(id) => setSelectedLayout(id)}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {isCustomizing && (
          <div className="mb-6 p-4 bg-orange-100 border border-orange-200 rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <Edit3 className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-orange-800">
                Customization Mode Active
              </span>
            </div>
            <p className="text-sm text-orange-700">Click and drag widgets to rearrange them. Use the resize handles to change widget sizes. Click "Save Layout" when you're done customizing. </p>
          </div>
        )}


        <div
          className={`grid ${currentLayout.grid} gap-6 min-h-[600px] auto-rows-fr`}
        >
          {currentLayout.widgets.map((widget) => (
            <WidgetCard
              key={widget.id}
              widget={widget}
              isCustomizing={isCustomizing}
              isSelected={selectedWidget === widget.id}
              onSelect={(id) => setSelectedWidget(id)}
            >
              {renderWidgetContent(widget)}
            </WidgetCard>
          ))}


          {selectedLayout === "custom" && isCustomizing && (
            <div className="col-span-3 row-span-1 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
              <div className="text-center">
                <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <span className="text-sm text-gray-500 font-medium">
                  Add Widget
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
