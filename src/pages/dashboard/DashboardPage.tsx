import { useNavigate } from 'react-router-dom'
import { useLinks } from '@/features/links/hooks/useLinks'
import { StatsCards } from '@/features/links/components/StatsCards'
import { CreateLinkForm } from '@/features/links/components/CreateLinkForm'
import { LinksTable } from '@/features/links/components/LinksTable'
import { ThemeToggle } from '@/components/ui'
import logoSrc from '@/assets/3url.svg'
import type { Link } from '@/features/links/types'

export function DashboardPage() {
  const navigate = useNavigate()
  const { links, stats, isLoading, error, deleteLink, reload } = useLinks()

  function handleLogout() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  function handleCreated(link: Link) {
    reload()
    // optimistic: prepend new link without waiting for reload
    void link
  }

  return (
    <div className="min-h-svh bg-page-bg">
      <ThemeToggle />

      {/* Header */}
      <header className="border-b border-page-border px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src={logoSrc} alt="3URL" className="w-6 h-8 dark:invert" />
          <span className="text-lg font-bold text-page-heading tracking-tight">3URL</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-page-text hover:text-page-heading transition-colors cursor-pointer"
        >
          Sign out
        </button>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold text-page-heading tracking-tight">Dashboard</h1>
          <p className="text-sm text-page-text mt-1">Manage and track your shortened URLs.</p>
        </div>

        <StatsCards stats={stats} />
        <CreateLinkForm onCreated={handleCreated} />

        {isLoading && (
          <div className="text-sm text-page-text text-center py-8">Loading...</div>
        )}

        {error && (
          <p className="text-sm text-red-500 bg-red-500/8 border border-red-500/25 rounded-lg px-3 py-2.5" role="alert">
            {error}
          </p>
        )}

        {!isLoading && <LinksTable links={links} onDelete={deleteLink} />}
      </main>
    </div>
  )
}
