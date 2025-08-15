import React from 'react'
import { Search } from 'lucide-react'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const SearchBar: React.FC<Props> = ({ className = '', ...props }) => (
  <div className={`flex items-center space-x-2 bg-white/60 rounded-xl border border-white/30 px-4 py-2 ${className}`}>
    <Search className="w-4 h-4 text-gray-400" />
    <input className="bg-transparent outline-none text-sm placeholder:text-gray-400 flex-1" {...props} />
  </div>
)

export default SearchBar

