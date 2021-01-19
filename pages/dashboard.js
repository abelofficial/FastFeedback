import useSWR from 'swr';
import _ from 'lodash';
import { useAuth } from '@lib/auth';
import EmptyState from '@components/EmptyState';
import fetcher from '@utils/fetcher';
import SitesTableSkeleton from '@components/SitesTableSkeleton';
import DashboardShell from '@components/DashboardShell';
import SitesTable from '@components/SitesTable';

export default function Dashboard() {
  const { user } = useAuth();

  const { data } = useSWR(user ? ['/api/sites', user?.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SitesTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {_.isEmpty(data.sites) ? (
        <EmptyState />
      ) : (
        <SitesTable sites={data.sites} />
      )}
    </DashboardShell>
  );
}
