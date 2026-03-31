import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  loading?: boolean
}

const variantClasses = {
  primary: 'bg-accent text-accent-text hover:bg-accent-hover',
  ghost:   'bg-transparent text-accent border border-accent-border hover:bg-accent-bg',
}

export function Button({
  variant = 'primary',
  loading = false,
  children,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center gap-2',
        'px-5 py-2.5 rounded-lg text-[15px] font-medium leading-none',
        'border border-transparent cursor-pointer',
        'transition-colors duration-200',
        'disabled:opacity-55 disabled:cursor-not-allowed',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        variantClasses[variant],
        className,
      ].join(' ')}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <span
          className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  )
}
