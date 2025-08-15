import React, { useEffect, useState } from 'react'
import AppShell from '../components/organisms/AppShell'
import FiltersBar from '../components/molecules/FiltersBar'
import Card from '../components/atoms/Card'
import Skeleton from '../components/atoms/Skeleton'

const Sparkline: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 24" className={className}>
    <polyline fill="none" stroke="#94a3b8" strokeWidth="2" points="0,18 20,16 30,17 40,12 55,8 70,16 85,20 100,10" />
  </svg>
)

const MetricCard: React.FC<{ title: string; value: string; trend?: boolean }> = ({ title, value, trend }) => (
  <Card className="p-4">
    <div className="text-xs text-gray-500 mb-1">Meal Kit Support</div>
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-600">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
      {trend && <Sparkline className="w-24 h-10" />}
    </div>
  </Card>
)

const UnifiedInsights: React.FC = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AppShell title="Unified Insights">
      <div className="space-y-6">
        <FiltersBar />

        <div className="grid grid-cols-12 gap-6">
          <Card className="col-span-8 p-4">
            {loading ? (
              <div className="space-y-3">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-48 w-full rounded-lg" />
              </div>
            ) : (
              <>
                <div className="text-xs text-gray-500 mb-2">Meal Kit Support</div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-700">Contact Trend</div>
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 rounded border bg-white text-xs">⤢</button>
                    <button className="px-2 py-1 rounded border bg-white text-xs">📊</button>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">18,851 <span className="text-sm text-red-500 align-middle">▼ 3%</span></div>
                <div className="h-48 bg-slate-100 rounded-lg flex items-end">
                  <svg viewBox="0 0 100 40" className="w-full h-full">
                    <polyline fill="none" stroke="#64748b" strokeWidth="2" points="0,30 15,28 25,29 35,24 45,18 55,20 65,25 75,22 85,26 95,32 100,34" />
                  </svg>
                </div>
                <div className="text-xs text-gray-500 mt-2 flex justify-between">
                  <span>01 Oct</span><span>02 Oct</span><span>03 Oct</span><span>04 Oct</span><span>05 Oct</span><span>06 Oct</span><span>07 Oct</span><span>08 Oct</span>
                </div>
              </>
            )}
          </Card>

          <div className="col-span-4 grid grid-cols-1 gap-4">
            {loading ? (
              <>
                <Skeleton className="h-24" />
                <Skeleton className="h-24" />
                <Skeleton className="h-24" />
                <Skeleton className="h-24" />
              </>
            ) : (
              <>
                <MetricCard title="Volume" value="18,851" />
                <MetricCard title="% Of Tickets" value="100%" />
                <MetricCard title="Sentiment" value="93%" />
                <MetricCard title="CSAT" value="90%" />
              </>
            )}
          </div>

          <Card className="col-span-7 p-4">
            {loading ? (
              <div className="space-y-3">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-40 w-full rounded-lg" />
              </div>
            ) : (
              <>
                <div className="text-xs text-gray-500 mb-2">Meal Kit Support</div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium">Top Contact Themes</div>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 rounded border bg-white text-xs">📄</button>
                    <button className="px-2 py-1 rounded border bg-white text-xs">📊</button>
                  </div>
                </div>
                <div className="divide-y">
                  {['Order','Subscription','Box','Delivery','Payment'].map((t) => (
                    <div key={t} className="flex items-center gap-4 py-2">
                      <div className="w-40 text-sm text-gray-700">{t}</div>
                      <div className="text-sm text-gray-900 w-24">8,102</div>
                      <div className="text-xs text-red-500 w-12">▼ 4%</div>
                      <Sparkline className="flex-1 h-6" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </Card>

          <Card className="col-span-5 p-4">
            {loading ? (
              <div className="space-y-3">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-32 w-full rounded-lg" />
              </div>
            ) : (
              <>
                <div className="text-xs text-gray-500 mb-2">Meal Kit Support</div>
                <div className="text-sm font-medium mb-3">Recent Trends</div>
                <div className="space-y-3">
                  {['Can\'t Select Recipes','Slot Not Available','Card Expired'].map((t) => (
                    <div key={t} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="text-sm text-gray-700">{t}</div>
                        <div className="text-xs text-gray-500">SentiSum Tag</div>
                      </div>
                      <div className="w-16 text-sm text-right">504</div>
                      <div className="w-16 text-xs text-red-500 text-right">▲ 145%</div>
                      <Sparkline className="w-24 h-6" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </AppShell>
  )
}

export default UnifiedInsights

