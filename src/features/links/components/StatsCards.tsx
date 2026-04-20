import type { LinkStats } from '@/features/links/types'

interface StatsCardsProps {
  stats: LinkStats
}

interface StatCardProps {
  label: string
  value: number
  icon: React.ReactNode
}

function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 border border-page-border rounded-lg p-5 bg-page-bg">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-bg text-accent shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-page-heading">{value.toLocaleString()}</p>
        <p className="text-sm text-page-text">{label}</p>
      </div>
    </div>
  )
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard
        label="Total links"
        value={stats.totalLinks}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        }
      />
      <StatCard
        label="Total clicks"
        value={stats.totalClicks}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        }
      />
    </div>
  )
}
