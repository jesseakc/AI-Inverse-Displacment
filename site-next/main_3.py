// app/components/dashboard.tsx
import { Suspense } from 'react';
import { getUser, getDashboardData } from '@/lib/data';

async function UserProfile() {
  const user = await getUser();
  return <UserCard user={user} />;
}

async function DashboardMetrics() {
  const data = await getDashboardData();
  return <MetricsGrid data={data} />;
}

export default function Dashboard() {
  return (
    <div>
      <Suspense fallback={<UserSkeleton />}>
        <UserProfile />
      </Suspense>
      
      <Suspense fallback={<MetricsSkeleton />}>
        <DashboardMetrics />
      </Suspense>
    </div>
  );
}