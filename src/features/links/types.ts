export interface Link {
  id: string
  originalUrl: string
  shortCode: string
  shortUrl: string
  clicks: number
  createdAt: string
}

export interface LinkStats {
  totalLinks: number
  totalClicks: number
}
