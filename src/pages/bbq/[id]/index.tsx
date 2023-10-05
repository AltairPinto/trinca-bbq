import { BBQLayout } from 'components/Layouts/BBQLayout';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { DetailsScreen } from 'features/BBQ/BBQScreens/DetailsScreen';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const PageBBQDetails = ({ eventId }: { eventId: string }) => {
  const { bbq } = useSelector((state: RootState) => state);
  const event = bbq.events.find((e) => e.id === eventId);

  return event ? (
    <ProtectedRoute>
      <DetailsScreen {...event} />
    </ProtectedRoute>
  ) : null;
};

PageBBQDetails.Layout = BBQLayout;

export async function getServerSideProps({ params }) {
  return { props: { eventId: params.id } };
}

export default PageBBQDetails;
