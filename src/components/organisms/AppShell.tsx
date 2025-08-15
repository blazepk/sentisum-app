import React from 'react'
import Sidebar from './Sidebar'

type HeaderProps = { title?: string }

import SelectedLayoutBanner from './SelectedLayoutBanner'

const DefaultHeader: React.FC<HeaderProps> = ({ title = 'SentiSum Dashboard' }) => (
  <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
    <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold">{title}</h1>
        <SelectedLayoutBanner />
      </div>
      <div className="flex gap-2">
        <button className="px-3 py-1.5 text-sm rounded-lg bg-blue-600 text-white">Create</button>
        <button className="px-3 py-1.5 text-sm rounded-lg border bg-white">Subscribe</button>
        <button className="px-3 py-1.5 text-sm rounded-lg border bg-white">Share</button>
      </div>
    </div>
  </div>
)

const AppShell: React.FC<{ children: React.ReactNode; header?: React.ReactNode; title?: string }> = ({ children, header, title }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen">
          {header ?? <DefaultHeader title={title} />}
          <div className="max-w-7xl mx-auto px-6 py-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default AppShell

