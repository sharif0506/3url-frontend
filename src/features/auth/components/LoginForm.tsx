import { Link } from 'react-router-dom'
import { Button, Input } from '@/components/ui'
import { useLoginForm } from '@/features/auth/hooks/useLoginForm'

export function LoginForm() {
  const { values, isLoading, error, handleChange, handleSubmit } = useLoginForm()

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />
      </div>

      {error && (
        <p
          className="text-sm text-red-500 bg-red-500/8 border border-red-500/25 rounded-lg px-3 py-2.5 m-0"
          role="alert"
        >
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3">
        <Link
          to="/forgot-password"
          className="text-[13px] text-accent self-end hover:underline"
        >
          Forgot password?
        </Link>
        <Button type="submit" loading={isLoading} className="w-full">
          Sign in
        </Button>
      </div>
    </form>
  )
}
