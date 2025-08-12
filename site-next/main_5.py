// app/posts/[id]/page.tsx
import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { PostSkeleton } from '@/components/skeletons/post'
import { PostContent } from './post-content'
import { PostComments } from './post-comments'
import { PostSidebar } from './post-sidebar'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const post = await getPost(id)
  
  return {
    title: post.title,
    description: post.content.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 160),
      type: 'article',
      publishedTime: post.createdAt,
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2">
          <Suspense fallback={<PostSkeleton />}>
            <PostContent id={id} />
          </Suspense>
          
          <Suspense fallback={<div>Loading comments...</div>}>
            <PostComments postId={id} />
          </Suspense>
        </main>
        
        <aside className="lg:col-span-1">
          <Suspense fallback={<div>Loading sidebar...</div>}>
            <PostSidebar postId={id} />
          </Suspense>
        </aside>
      </div>
    </div>
  )
}