import { Button, Input } from '@/components/ui'
import { useLoginForm } from '@/features/auth/hooks/useLoginForm'
import styles from './LoginForm.module.css'

export function LoginForm() {
  const { values, isLoading, error, handleChange, handleSubmit } = useLoginForm()

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fields}>
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
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      <div className={styles.actions}>
        <a href="/forgot-password" className={styles.forgotLink}>
          Forgot password?
        </a>
        <Button type="submit" loading={isLoading} style={{ width: '100%' }}>
          Sign in
        </Button>
      </div>
    </form>
  )
}
