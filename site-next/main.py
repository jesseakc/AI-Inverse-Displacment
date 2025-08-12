// app/lib/cache-config.ts
export const cacheConfig = {
  static: {
    revalidate: 3600, // 1 hour
    tags: ['static-data']
  },
  dynamic: {
    revalidate: 60, // 1 minute
    tags: ['dynamic-data']
  },
  api: {
    revalidate: 0,
    dynamic: 'force-dynamic'
  }
} as const;

// app/components/server-data.tsx
import { unstable_cache } from 'next/cache';

const getCachedData = unstable_cache(
  async (id: string) => {
    const res = await fetch(`${API_URL}/data/${id}`, {
      next: { revalidate: 3600, tags: [`data-${id}`] }
    });
    return res.json();
  },
  ['data-cache'],
  { revalidate: 3600, tags: ['data-cache'] }
);

export async function ServerData({ id }: { id: string }) {
  const data = await getCachedData(id);
  return <DataComponent data={data} />;
}