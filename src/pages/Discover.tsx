import React, { useEffect, useState } from 'react'
import AppShell from '../components/organisms/AppShell'
import FiltersBar from '../components/molecules/FiltersBar'
import Card from '../components/atoms/Card'
import Skeleton from '../components/atoms/Skeleton'

const Spark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 24" className={className}>
    <polyline fill="none" stroke="#94a3b8" strokeWidth="2" points="0,18 12,16 20,12 35,10 45,15 55,12 70,16 85,20 100,10" />
  </svg>
)

const Discover: React.FC = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AppShell title="Discover">
      <div className="space-y-6">
        <FiltersBar />

        <div className="grid grid-cols-12 gap-6">
          <Card className="col-span-7 p-0">
            <div className="px-4 py-3 border-b flex items-center justify-between">
              <div className="font-medium text-sm">SentiSum Tag</div>
              <div className="text-xs text-gray-500">Latest</div>
            </div>
            <div className="divide-y">
              {loading ? (
                Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="px-4 py-3">
                    <Skeleton className="h-6 w-full" />
                  </div>
                ))
              ) : (
                [ 'All', 'Repetitive Issues', 'Missing Ingredients', 'Credit Not Applied', 'Box Not Delivered', 'Incorrectly Charged' ].map((t)=> (
                  <div key={t} className="flex items-center gap-3 px-4 py-3">
                    <div className="w-80 text-sm text-gray-800">{t}</div>
                    <div className="text-xs text-gray-500">Mentioned 1,234 times</div>
                    <div className="ml-auto w-40"><Spark className="h-6 w-full" /></div>
                    <button className="ml-2 px-2 py-1 rounded border bg-white text-xs">+</button>
                  </div>
                ))
              )}
            </div>
          </Card>

          <Card className="col-span-5 p-0">
            <div className="px-4 py-3 border-b font-medium text-sm">All Conversations</div>
            <div className="divide-y">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="p-4 space-y-2">
                    <Skeleton className="h-3 w-48" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                ))
              ) : (
                [1,2,3,4,5].map((i)=> (
                  <div key={i} className="p-4 space-y-2">
                    <div className="text-xs text-gray-500">Ticket ID: 29366{i} • Web • 05:{10+i} AM</div>
                    <div className="text-sm text-gray-800">We dont want or need a box this next coming week and weve had one automatically selected...</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs">Cancel Order</span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs">Repetitive Issues</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}

export default Discover

