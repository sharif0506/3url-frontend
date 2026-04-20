import { Button, Input } from '@/components/ui'
import { useRegisterForm } from '@/features/auth/hooks/useRegisterForm'

export function RegisterForm() {
  const { values, isLoading, error, handleChange, handleSubmit } = useRegisterForm()

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4">
        <Input
          label="Full name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          autoComplete="name"
          required
        />
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
          autoComplete="new-password"
          required
        />
        <Input
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          autoComplete="new-password"
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

      <Button type="submit" loading={isLoading} className="w-full">
        Create account
      </Button>
    </form>
  )
}
