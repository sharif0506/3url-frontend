import { Button, Input } from '@/components/ui'
import { useResetPasswordForm } from '@/features/auth/hooks/useResetPasswordForm'

export function ResetPasswordForm() {
  const { values, isLoading, error, handleChange, handleSubmit } = useResetPasswordForm()

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4">
        <Input
          label="New password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="••••••••"
          autoComplete="new-password"
          required
        />
        <Input
          label="Confirm new password"
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
        Reset password
      </Button>
    </form>
  )
}
