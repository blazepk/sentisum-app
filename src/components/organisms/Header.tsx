import React from 'react'
import { Layout, Bell, Settings } from 'lucide-react'
import SearchBar from '../molecules/SearchBar'
import Button from '../atoms/Button'

const Header: React.FC = () => (
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
          <SearchBar placeholder="Search dashboard..." />
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary" className="px-3 py-1.5 text-xs">Tutorial</Button>
          <Button className="px-3 py-1.5 text-xs">Create</Button>
          <button className="p-2 rounded-lg hover:bg-white/60">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/60">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  </header>
)

export default Header

