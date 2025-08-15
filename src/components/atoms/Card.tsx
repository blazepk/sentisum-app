import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement>

const Card: React.FC<Props> = ({ className = '', ...props }) => (
  <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm ${className}`} {...props} />
)

export default Card

