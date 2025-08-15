import React from 'react'
import AppShell from '../components/organisms/AppShell'
import FiltersBar from '../components/molecules/FiltersBar'
import Card from '../components/atoms/Card'

const Spark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 24" className={className}>
    <polyline fill="none" stroke="#94a3b8" strokeWidth="2" points="0,18 12,16 20,12 35,10 45,15 55,12 70,16 85,20 100,10" />
  </svg>
)

const SummaryTable: React.FC = () => (
  <AppShell title="Summary table">
    <div className="space-y-6">
      <FiltersBar />

      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 p-0">
          <div className="px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm">Highest Volume</button>
              <button className="px-3 py-1.5 rounded-lg border bg-white text-sm">Lowest Volume</button>
              <button className="px-3 py-1.5 rounded-lg border bg-white text-sm">Top Increases</button>
              <button className="px-3 py-1.5 rounded-lg border bg-white text-sm">Top Decreases</button>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-12 text-xs text-gray-500 pb-2 border-b">
              <div className="col-span-6">SentiSum Tag</div>
              <div className="col-span-2">Volume</div>
              <div className="col-span-2">% Change</div>
              <div className="col-span-2">Trend</div>
            </div>
            {[ 'Repetitive Issues','Missing Ingredients','Credit Not Applied','Box Not Delivered','Incorrectly Charged' ].map((t)=> (
              <div key={t} className="grid grid-cols-12 py-3 items-center border-b last:border-0">
                <div className="col-span-6 text-sm">{t}</div>
                <div className="col-span-2 text-sm">5,836</div>
                <div className="col-span-2 text-xs text-red-500">▼ 7%</div>
                <div className="col-span-2"><Spark className="w-24 h-6"/></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </AppShell>
)

export default SummaryTable

