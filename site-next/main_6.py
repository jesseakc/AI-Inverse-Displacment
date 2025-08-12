// app/actions/posts.ts
'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { z } from 'zod'
import { auth } from '@/lib/auth'

const createPostSchema = z.object({
  title: z.string().min(5).max(100),
  content: z.string().min(50),
  published: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
})

export type CreatePostInput = z.infer<typeof createPostSchema>

export async function createPost(input: CreatePostInput) {
  const session = await auth()
  
  if (!session?.user?.id) {
    throw new Error('Unauthorized')
  }
  
  const validatedData = createPostSchema.parse(input)
  
  const response = await fetch(`${process.env.API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.accessToken}`,
    },
    body: JSON.stringify({
      ...validatedData,
      authorId: session.user.id,
    }),
  })
  
  if (!response.ok) {
    throw new Error('Failed to create post')
  }
  
  const post = await response.json()
  
  // Revalidate cache
  revalidatePath('/posts')
  revalidateTag('posts-list')
  
  return post
}

// Optimistic update action
export async function updatePostLikes(postId: string, increment: boolean) {
  const session = await auth()
  
  if (!session?.user?.id) {
    throw new Error('Unauthorized')
  }
  
  // Optimistic update
  revalidateTag(`post-${postId}`)
  
  const response = await fetch(
    `${process.env.API_URL}/posts/${postId}/like`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.accessToken}`,
      },
      body: JSON.stringify({ increment }),
    }
  )
  
  if (!response.ok) {
    throw new Error('Failed to update like')
  }
  
  return response.json()
}