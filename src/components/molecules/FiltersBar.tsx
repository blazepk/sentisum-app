import React from 'react'
import { CalendarDays, SlidersHorizontal, Percent, Hash } from 'lucide-react'

const chip = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white text-sm'

const FiltersBar: React.FC = () => (
  <div className="flex flex-wrap items-center gap-2">
    <button className={chip}><CalendarDays className="w-4 h-4"/>01 - 08 Oct, 2023</button>
    <button className={chip}><CalendarDays className="w-4 h-4"/>Comparing: 24 Sep - 01 Oct</button>
    <button className={chip}>Daily</button>
    <button className={chip}><SlidersHorizontal className="w-4 h-4"/>Apply Filters</button>
    <button className={chip}><Percent className="w-4 h-4"/></button>
    <button className={chip}><Hash className="w-4 h-4"/></button>
    <div className="ml-auto flex items-center gap-2">
      <button className={chip}>Search…</button>
      <button className={chip}>Export</button>
    </div>
  </div>
)

export default FiltersBar

