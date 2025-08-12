// app/layout.tsx
export const experimental_ppr = true;

// app/posts/[id]/page.tsx
import { Suspense } from 'react';
import { PostSkeleton } from '@/components/skeletons';

export default async function PostPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<PostSkeleton />}>
        <PostContent id={params.id} />
      </Suspense>
      
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments postId={params.id} />
      </Suspense>
    </div>
  );
}