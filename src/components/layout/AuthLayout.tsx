import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '@/components/ui'
import logoSrc from '@/assets/3url.svg'

interface AuthLayoutProps {
  title: string
  children: ReactNode
  footer?: ReactNode
}

export function AuthLayout({ title, children, footer }: AuthLayoutProps) {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center gap-4 px-4 py-10 bg-page-bg">
      <ThemeToggle />

      <Link to="/login" className="flex flex-col items-center gap-3 no-underline">
        <img src={logoSrc} alt="3URL logo" className="w-11 h-14 dark:invert" />
        <span className="text-[28px] font-bold text-page-heading tracking-tight">3URL</span>
      </Link>

      <div className="w-full max-w-[340px] flex flex-col gap-5 bg-page-bg border border-page-border rounded-lg p-5 shadow-sm">
        <h1 className="text-xl font-semibold text-center text-page-heading tracking-tight">
          {title}
        </h1>
        {children}
      </div>

      {footer && (
        <div className="w-full max-w-[340px] border border-page-border rounded-lg p-4 text-center text-sm text-page-text">
          {footer}
        </div>
      )}
    </main>
  )
}
