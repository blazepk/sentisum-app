import React from 'react'

const ActivityWidget: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="h-full">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={item} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-green-500' : idx === 1 ? 'bg-blue-500' : 'bg-orange-500'}`} />
          <span className="text-sm">{item}</span>
        </div>
      ))}
    </div>
  </div>
)

export default ActivityWidget

