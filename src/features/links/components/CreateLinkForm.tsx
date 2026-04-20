import { Button, Input } from '@/components/ui'
import { useCreateLink } from '@/features/links/hooks/useCreateLink'
import type { Link } from '@/features/links/types'

interface CreateLinkFormProps {
  onCreated: (link: Link) => void
}

export function CreateLinkForm({ onCreated }: CreateLinkFormProps) {
  const { url, isLoading, error, handleChange, handleSubmit } = useCreateLink(onCreated)

  return (
    <div className="border border-page-border rounded-lg p-5 bg-page-bg">
      <h2 className="text-base font-semibold text-page-heading mb-4">Shorten a URL</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <Input
              label="Destination URL"
              type="url"
              name="url"
              value={url}
              onChange={handleChange}
              placeholder="https://example.com/very/long/url"
              required
            />
          </div>
          <Button type="submit" loading={isLoading} className="shrink-0">
            Shorten
          </Button>
        </div>
        {error && (
          <p className="text-sm text-red-500 mt-2" role="alert">
            {error}
          </p>
        )}
      </form>
    </div>
  )
}
