// lib/data/fetchers.ts
import { unstable_cache } from 'next/cache'
import { notFound } from 'next/navigation'

interface Post {
  id: string
  title: string
  content: string
  published: boolean
  createdAt: Date
}

export const getPost = unstable_cache(
  async (id: string): Promise<Post> => {
    const response = await fetch(`${process.env.API_URL}/posts/${id}`, {
      next: { 
        revalidate: 3600, // Revalidate every hour
        tags: [`post-${id}`, 'posts']
      }
    })
    
    if (!response.ok) {
      if (response.status === 404) notFound()
      throw new Error('Failed to fetch post')
    }
    
    return response.json()
  },
  ['posts', 'get-post'],
  {
    revalidate: 3600,
    tags: ['posts']
  }
)

export const getPosts = unstable_cache(
  async (limit = 10, offset = 0) => {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    })
    
    const response = await fetch(
      `${process.env.API_URL}/posts?${params}`,
      {
        next: {
          revalidate: 300, // Revalidate every 5 minutes
          tags: ['posts-list']
        }
      }
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    
    const posts = await response.json()
    
    // Parallel preloading of related data
    const preloadPromises = posts.map((post: Post) => 
      fetch(`${process.env.API_URL}/posts/${post.id}/comments`, {
        cache: 'force-cache'
      })
    )
    
    // Don't await - let Next.js handle parallel loading
    Promise.all(preloadPromises)
    
    return posts
  },
  ['posts', 'get-posts'],
  {
    revalidate: 300,
    tags: ['posts-list']
  }
)