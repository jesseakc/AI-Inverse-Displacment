// app/api/search/route.ts
export const runtime = 'edge'
export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const searchSchema = z.object({
  query: z.string().min(1).max(100),
  type: z.enum(['posts', 'products', 'users']).default('posts'),
  limit: z.number().min(1).max(50).default(10),
})

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  
  const validation = searchSchema.safeParse({
    query: searchParams.get('q'),
    type: searchParams.get('type') || 'posts',
    limit: parseInt(searchParams.get('limit') || '10'),
  })
  
  if (!validation.success) {
    return NextResponse.json(
      { error: 'Invalid search parameters' },
      { status: 400 }
    )
  }
  
  const { query, type, limit } = validation.data
  
  try {
    // Edge-compatible search using fetch
    const response = await fetch(
      `${process.env.SEARCH_API_URL}/search?q=${encodeURIComponent(query)}&type=${type}&limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.SEARCH_API_KEY}`,
          'Accept': 'application/json',
        },
      }
    )
    
    if (!response.ok) {
      throw new Error('Search service error')
    }
    
    const results = await response.json()
    
    return NextResponse.json(results, {
      headers: {
        'Cache-Control': 's-maxage=60, stale-while-revalidate=120',
        'CDN-Cache-Control': 'max-age=300',
      },
    })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Search failed' },
      { status: 500 }
    )
  }
}