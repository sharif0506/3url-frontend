import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function Input({ label, error, id, className = '', ...props }: InputProps) {
  const inputId = id ?? `input-${label.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-page-heading" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={[
          'w-full px-3 py-2.5 rounded-lg text-[15px]',
          'border bg-page-bg text-page-heading',
          'transition-colors duration-200',
          'placeholder:text-page-text placeholder:opacity-60',
          'focus:outline-none focus:shadow-[0_0_0_3px_var(--accent-bg)]',
          error
            ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]'
            : 'border-page-border focus:border-accent',
          className,
        ].join(' ')}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-[13px] text-red-500 m-0" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
