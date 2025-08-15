import React from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

const base = 'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
const variants: Record<Variant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-white text-gray-700 border hover:bg-gray-50 focus:ring-gray-300',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300',
}

const Button: React.FC<Props> = ({ variant = 'primary', className = '', ...props }) => (
  <button className={`${base} ${variants[variant]} ${className}`} {...props} />
)

export default Button

