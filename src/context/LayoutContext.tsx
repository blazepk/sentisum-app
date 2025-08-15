import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { LayoutTemplate } from '../types/dashboard'
import { layoutTemplates } from '../constants/layouts'

export type LayoutContextValue = {
  selectedLayoutId: string
  setSelectedLayoutId: (id: string) => void
  currentLayout: LayoutTemplate
}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined)

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedLayoutId, setSelectedLayoutIdState] = useState<string>(() => {
    return localStorage.getItem('selectedLayoutId') || 'classic'
  })

  const setSelectedLayoutId = (id: string) => {
    setSelectedLayoutIdState(id)
    localStorage.setItem('selectedLayoutId', id)
  }

  const currentLayout = useMemo<LayoutTemplate>(() => {
    return layoutTemplates.find(l => l.id === selectedLayoutId) || layoutTemplates[0]
  }, [selectedLayoutId])

  // in case templates change in future, ensure stored id stays valid
  useEffect(() => {
    if (!layoutTemplates.some(l => l.id === selectedLayoutId)) setSelectedLayoutId('classic')
  }, [selectedLayoutId])

  const value: LayoutContextValue = { selectedLayoutId, setSelectedLayoutId, currentLayout }
  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}

export const useLayout = (): LayoutContextValue => {
  const ctx = useContext(LayoutContext)
  if (!ctx) throw new Error('useLayout must be used within LayoutProvider')
  return ctx
}

