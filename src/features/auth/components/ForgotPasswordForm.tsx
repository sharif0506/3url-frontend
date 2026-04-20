import { Button, Input } from '@/components/ui'
import { useForgotPasswordForm } from '@/features/auth/hooks/useForgotPasswordForm'

export function ForgotPasswordForm() {
  const { email, isLoading, isSubmitted, error, handleChange, handleSubmit } =
    useForgotPasswordForm()

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-2 text-center">
        <div className="w-12 h-12 rounded-full bg-accent-bg flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-sm text-page-text">
          If an account exists for <span className="font-medium text-page-heading">{email}</span>,
          you'll receive a reset link shortly.
        </p>
      </div>
    )
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
      <Input
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="you@example.com"
        autoComplete="email"
        required
      />

      {error && (
        <p
          className="text-sm text-red-500 bg-red-500/8 border border-red-500/25 rounded-lg px-3 py-2.5 m-0"
          role="alert"
        >
          {error}
        </p>
      )}

      <Button type="submit" loading={isLoading} className="w-full">
        Send reset link
      </Button>
    </form>
  )
}
