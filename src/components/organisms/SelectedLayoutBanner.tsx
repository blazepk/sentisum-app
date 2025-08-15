import React from 'react'
import { useLayout } from '../../context/LayoutContext'

const SelectedLayoutBanner: React.FC = () => {
  const { currentLayout } = useLayout()
  return (
    <div className="text-xs text-gray-500">{currentLayout.name}</div>
  )
}

export default SelectedLayoutBanner

