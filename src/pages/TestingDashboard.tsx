import React from 'react'
import AppShell from '../components/organisms/AppShell'
import FiltersBar from '../components/molecules/FiltersBar'
import Card from '../components/atoms/Card'

const StatCard: React.FC<{ title: string; value: string; accent?: string }> = ({ title, value, accent = 'bg-indigo-50' }) => (
  <Card className="p-4">
    <div className="text-xs text-gray-500 mb-2">Gaming Support</div>
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-700">{title}</div>
        <div className="text-3xl font-bold">{value}</div>
      </div>
      <div className={`w-32 h-16 rounded ${accent}`}></div>
    </div>
  </Card>
)

const BarItem: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="flex items-center gap-3">
    <div className="w-40 text-sm text-gray-700">{label}</div>
    <div className="flex-1 h-3 bg-indigo-100 rounded relative">
      <div className="absolute left-0 top-0 h-3 bg-indigo-500 rounded" style={{ width: `${Math.min(100, value/90*100)}%` }} />
    </div>
    <div className="w-16 text-right text-sm">{value.toLocaleString()}</div>
  </div>
)

const TestingDashboard: React.FC = () => (
  <AppShell title="Testing">
    <div className="space-y-6">
      <FiltersBar />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6 grid grid-cols-2 gap-4">
          <StatCard title="Volume" value="58,873" />
          <StatCard title="% Of Tickets" value="100%" />
          <StatCard title="CSAT" value="90%" />
          <StatCard title="Sentiment" value="93%" />
        </div>
        <Card className="col-span-6 p-4">
          <div className="text-xs text-gray-500 mb-2">Gaming Support</div>
          <div className="text-sm font-medium mb-3">Title</div>
          <div className="space-y-3">
            {[
              { label: 'Game Crashed', value: 8102 },
              { label: 'Game Aborted', value: 6259 },
              { label: 'Request Refund', value: 6015 },
              { label: "I Didn't Abort", value: 3409 },
            ].map((b) => <BarItem key={b.label} {...b} />)}
          </div>
        </Card>

        <Card className="col-span-7 p-4">
          <div className="text-xs text-gray-500 mb-2">Gaming Support</div>
          <div className="text-sm font-medium mb-3">Stat report</div>
          <div className="divide-y">
            {[ 'Game Crashed', 'Game Aborted', 'Request Refund', 'I Didn\'t Abort', 'App Crashed' ].map((t)=> (
              <div key={t} className="grid grid-cols-12 py-2 items-center">
                <div className="col-span-6 text-sm text-gray-700">{t}</div>
                <div className="col-span-2 text-sm">3,000</div>
                <div className="col-span-2 text-xs text-red-500">▼ 6%</div>
                <div className="col-span-2">
                  <svg viewBox="0 0 100 24" className="w-24 h-6">
                    <polyline fill="none" stroke="#94a3b8" strokeWidth="2" points="0,18 12,16 20,12 35,10 45,15 55,12 70,16 85,20 100,10" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-5 p-4 min-h-[220px] flex items-center justify-center text-sm text-gray-500">
          + Add widget
        </Card>
      </div>
    </div>
  </AppShell>
)

export default TestingDashboard

