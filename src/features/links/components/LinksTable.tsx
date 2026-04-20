import { useState } from 'react'
import type { Link } from '@/features/links/types'

interface LinksTableProps {
  links: Link[]
  onDelete: (id: string) => void
}

export function LinksTable({ links, onDelete }: LinksTableProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  async function copyToClipboard(link: Link) {
    await navigator.clipboard.writeText(link.shortUrl)
    setCopiedId(link.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  if (links.length === 0) {
    return (
      <div className="border border-page-border rounded-lg p-12 text-center text-page-text text-sm">
        No links yet. Shorten your first URL above.
      </div>
    )
  }

  return (
    <div className="border border-page-border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-page-border bg-accent-bg">
            <th className="text-left px-4 py-3 font-medium text-page-heading">Original URL</th>
            <th className="text-left px-4 py-3 font-medium text-page-heading">Short URL</th>
            <th className="text-left px-4 py-3 font-medium text-page-heading">Clicks</th>
            <th className="text-left px-4 py-3 font-medium text-page-heading">Created</th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody>
          {links.map((link, i) => (
            <tr
              key={link.id}
              className={i !== links.length - 1 ? 'border-b border-page-border' : ''}
            >
              <td className="px-4 py-3 text-page-text max-w-[220px]">
                <span className="block truncate" title={link.originalUrl}>
                  {link.originalUrl}
                </span>
              </td>
              <td className="px-4 py-3">
                <a
                  href={link.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  {link.shortUrl}
                </a>
              </td>
              <td className="px-4 py-3 text-page-text">{link.clicks.toLocaleString()}</td>
              <td className="px-4 py-3 text-page-text whitespace-nowrap">
                {new Date(link.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-2">
                  {/* Copy button */}
                  <button
                    className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md border border-page-border text-page-text hover:bg-accent-bg hover:border-accent-border transition-colors cursor-pointer"
                    onClick={() => copyToClipboard(link)}
                    title="Copy short URL"
                  >
                    {copiedId === link.id ? (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>

                  {/* Delete button */}
                  <button
                    className="flex items-center justify-center w-7 h-7 rounded-md border border-page-border text-page-text hover:bg-red-500/8 hover:border-red-500/40 hover:text-red-500 transition-colors cursor-pointer"
                    onClick={() => onDelete(link.id)}
                    title="Delete link"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
