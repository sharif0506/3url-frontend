import { LoginForm, SocialLoginButtons } from '@/features/auth'
import { ThemeToggle } from '@/components/ui'

function Logo() {
  return (
    <svg
      className="w-11 h-14 text-page-heading"
      viewBox="0 0 70 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="22" y1="16" x2="22" y2="74" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="22" y1="45" x2="50" y2="45" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 22 16 A 36 29 0 0 1 22 74" stroke="currentColor" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <circle cx="22" cy="16" r="7" fill="currentColor" />
      <circle cx="50" cy="45" r="7" fill="currentColor" />
      <circle cx="22" cy="74" r="7" fill="currentColor" />
    </svg>
  )
}

export function LoginPage() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center gap-4 px-4 py-10 bg-page-bg">
      <ThemeToggle />

      {/* Logo + brand name */}
      <div className="flex flex-col items-center gap-3">
        <Logo />
        <span className="text-[28px] font-bold text-page-heading tracking-tight">3URL</span>
      </div>

      {/* Form card */}
      <div className="w-full max-w-[340px] flex flex-col gap-5 bg-page-bg border border-page-border rounded-lg p-5 shadow-sm">
        <h1 className="text-xl font-semibold text-center text-page-heading tracking-tight">
          Sign in to your account
        </h1>

        <SocialLoginButtons />

        {/* Divider */}
        <div className="flex items-center gap-2.5 text-page-text text-xs">
          <div className="flex-1 h-px bg-page-border" />
          <span>or</span>
          <div className="flex-1 h-px bg-page-border" />
        </div>

        <LoginForm />
      </div>

      {/* Sign-up box */}
      <div className="w-full max-w-[340px] border border-page-border rounded-lg p-4 text-center text-sm text-page-text">
        New to 3URL?{' '}
        <a href="/register" className="text-accent font-medium hover:underline">
          Create an account
        </a>
      </div>
    </main>
  )
}
