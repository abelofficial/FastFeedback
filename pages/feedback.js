import useSWR from 'swr';
import _ from 'lodash';

import { useAuth } from '@lib/auth';
import EmptyState from '@components/EmptyState';
import fetcher from '@utils/fetcher';
import SitesTableSkeleton from '@components/SitesTableSkeleton';
import DashboardShell from '@components/DashboardShell';
import FeedbackTable from '@components/FeedbackTable';
import FeedbackHeader from '@components/FeedbackHeader';

const Feedback = () => {
  const { user } = useAuth();

  const { data } = useSWR(
    user ? ['/api/feedback', user?.token] : null,
    fetcher
  );

  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <FeedbackHeader />
        <SitesTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <FeedbackHeader />
      {_.isEmpty(data.feedbacks) ? (
        <EmptyState />
      ) : (
        <FeedbackTable feedbacks={data.feedbacks} />
      )}
    </DashboardShell>
  );
};

export default Feedback;
