import { Text } from '@chakra-ui/react';

import useSWR from 'swr';

import { useAuth } from '@lib/auth';
import EmptyState from '@components/EmptyState';
import fetcher from '@utils/fetcher';
import SitesTableSkeleton from '@components/SitesTableSkeleton';
import DashboardShell from '@components/DashboardShell';
import SitesTable from '@components/SitesTable';

export default function Dashboard() {
  const auth = useAuth();

  const { data, error } = useSWR('/api/sites', fetcher);

  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SitesTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      <SitesTable sites={data} />
    </DashboardShell>
  );
}
