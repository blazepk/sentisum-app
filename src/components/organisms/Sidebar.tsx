import React, { useMemo, useState, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Home, Compass, LayoutDashboard, Plus, Table2, Pin, PinOff } from 'lucide-react'

const iconButton = (active: boolean) =>
  `w-10 h-10 flex items-center justify-center rounded-lg ${active ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`

const Sidebar: React.FC = () => {
  const { pathname } = useLocation()

  const activeSection = useMemo<'home' | 'discover' | 'dashboards' | 'summary'>(() => {
    if (pathname.startsWith('/discover')) return 'discover'
    if (pathname.startsWith('/dashboards') || pathname.startsWith('/builder')) return 'dashboards'
    if (pathname.startsWith('/summary')) return 'summary'
    return 'home'
  }, [pathname])

  const [hoveredSection, setHoveredSection] = useState<'home' | 'discover' | 'dashboards' | 'summary' | 'create' | null>(null)
  const effectiveSection: 'home' | 'discover' | 'dashboards' | 'summary' | 'create' = hoveredSection ?? activeSection
  const sectionTitleMap: Record<typeof effectiveSection, string> = {
    home: 'Homepage',
    discover: 'Discover',
    dashboards: 'Dashboards',
    summary: 'Summary',
    create: 'Create',
  }

  // Pin + delayed hover expand
  const [pinned, setPinned] = useState<boolean>(() => localStorage.getItem('sidebarPinned') === '1')
  const [expanded, setExpanded] = useState<boolean>(pinned)
  const hoverTimer = useRef<number | null>(null)

  const openWithDelay = () => {
    if (pinned) { setExpanded(true); return }
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current)
    hoverTimer.current = window.setTimeout(() => setExpanded(true), 120)
  }
  const closeWithDelay = () => {
    if (pinned) return
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current)
    hoverTimer.current = window.setTimeout(() => setExpanded(false), 120)
  }
  const togglePin = () => {
    const next = !pinned
    setPinned(next)
    localStorage.setItem('sidebarPinned', next ? '1' : '0')
    setExpanded(next)
  }

  // Keyboard support: arrows move focus among icons
  const railRef = useRef<HTMLDivElement>(null)
  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const focusables = railRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]')
    if (!focusables || focusables.length === 0) return
    const currentIndex = Array.from(focusables).findIndex(el => el === document.activeElement)
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = focusables[Math.min(focusables.length - 1, currentIndex + 1)] || focusables[0]
      next.focus()
      setExpanded(true)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = focusables[Math.max(0, currentIndex - 1)] || focusables[focusables.length - 1]
      prev.focus()
      setExpanded(true)
    } else if (e.key === 'Escape') {
      if (!pinned) setExpanded(false)
    }
  }

  return (
    <aside
      className={`shrink-0 bg-white/80 backdrop-blur-sm border-r flex`}
      onMouseLeave={() => { setHoveredSection(null); closeWithDelay() }}
      onMouseEnter={openWithDelay}
    >
      {/* Left icon rail */}
      <nav ref={railRef} onKeyDown={handleKeyDown} className="w-14 border-r flex flex-col items-center py-3 gap-2" aria-label="Primary" >
        <Link to="/" title="Home" className="mb-2 font-semibold text-xs text-gray-900">ss</Link>
        <NavLink to="/" end title="Home" className={({ isActive }) => iconButton(isActive || activeSection==='home')} onMouseEnter={() => setHoveredSection('home')}>
          <Home className="w-4 h-4" />
        </NavLink>
        <NavLink to="/discover" title="Discover" className={({ isActive }) => iconButton(isActive || activeSection==='discover')} onMouseEnter={() => setHoveredSection('discover')}>
          <Compass className="w-4 h-4" />
        </NavLink>
        <NavLink to="/dashboards/testing" title="Dashboards" className={({ isActive }) => iconButton(isActive || activeSection==='dashboards')} onMouseEnter={() => setHoveredSection('dashboards')}>
          <LayoutDashboard className="w-4 h-4" />
        </NavLink>
        <NavLink to="/summary" title="Summary" className={({ isActive }) => iconButton(isActive || activeSection==='summary')} onMouseEnter={() => setHoveredSection('summary')}>
          <Table2 className="w-4 h-4" />
        </NavLink>
        <NavLink to="/builder" title="Create" className={() => iconButton(false)} onMouseEnter={() => setHoveredSection('create')}>
          <Plus className="w-4 h-4" />
        </NavLink>
        <button onClick={togglePin} className={`mt-auto w-10 h-10 flex items-center justify-center rounded-lg ${pinned ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`} title={pinned ? 'Unpin' : 'Pin'}>
          {pinned ? <Pin className="w-4 h-4" /> : <PinOff className="w-4 h-4" />}
        </button>
      </nav>

      {/* Controlled expand context panel */}
      <div className={`${expanded ? 'w-56 p-3' : 'w-0 p-0'} transition-all duration-300 overflow-hidden`}>
        <div className={`${expanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'} h-10 flex items-center px-1 text-sm text-gray-500 transition-all duration-200`}>
          {sectionTitleMap[effectiveSection]}
        </div>
        <div className={`${expanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'} transition-all duration-200`}>
          {effectiveSection === 'home' && (
            <div className="space-y-1">
              <NavLink to="/" end className={({ isActive }) => `block px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-100'}`}>Unified Insights</NavLink>
              <NavLink to="/?section=trends" className={() => `block px-3 py-2 rounded-lg text-sm hover:bg-gray-100`}>Trends</NavLink>
              <NavLink to="/?section=themes" className={() => `block px-3 py-2 rounded-lg text-sm hover:bg-gray-100`}>Top Themes</NavLink>
            </div>
          )}
          {effectiveSection === 'discover' && (
            <div className="space-y-1">
              <NavLink to="/discover?panel=tags" className={() => `block px-3 py-2 rounded-lg text-sm hover:bg-gray-100`}>Tag Explorer</NavLink>
              <NavLink to="/discover?panel=conversations" className={() => `block px-3 py-2 rounded-lg text-sm hover:bg-gray-100`}>Conversations</NavLink>
            </div>
          )}
          {effectiveSection === 'summary' && (
            <div className="space-y-1">
              <NavLink to="/summary?tab=highest" className={() => `block px-3 py-2 rounded-lg text-sm hover:bg-gray-100`}>Highest Volume</NavLink>
              <NavLink to="/summary?tab=lowest" className={() => `block px-3 py-2 rounded-lg text-sm hover:bg-gray-100`}>Lowest Volume</NavLink>
              <NavLink to="/summary?tab=increases" className={() => `block px-3 py-2 rounded-lg text-sm hover:bg-gray-100`}>Top Increases</NavLink>
              <NavLink to="/summary?tab=decreases" className={() => `block px-3 py-2 rounded-lg text-sm hover:bg-gray-100`}>Top Decreases</NavLink>
            </div>
          )}
          {effectiveSection === 'dashboards' && (
            <div className="space-y-2">
              <div className="px-1 text-xs uppercase text-gray-400">Dashboards</div>
              <NavLink to="/dashboards/testing" className={({ isActive }) => `block px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-100'}`}>Testing</NavLink>
              <NavLink to="/dashboards/testing?view=performance" className={() => `block px-3 py-2 rounded-lg text-sm hover:bg-gray-100`}>Performance</NavLink>
              <NavLink to="/dashboards/testing?view=qa" className={() => `block px-3 py-2 rounded-lg text-sm hover:bg-gray-100`}>QA Reports</NavLink>
              <NavLink to="/builder" className={({ isActive }) => `block px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-100'}`}>Create dashboard</NavLink>
            </div>
          )}
          {effectiveSection === 'create' && (
            <div className="space-y-2">
              <NavLink to="/builder" className={({ isActive }) => `block px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-100'}`}>Create dashboard</NavLink>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

