import React from 'react'

type Props = {
  title: string
  items: string[]
}

const ListWidget: React.FC<Props> = ({ title, items }) => (
  <div className="h-full">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm font-medium">{item}</span>
          <span className="text-sm text-gray-500">{(5836 - idx * 1000).toLocaleString()}</span>
        </div>
      ))}
    </div>
  </div>
)

export default ListWidget

