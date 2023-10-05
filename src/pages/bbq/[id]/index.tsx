import { BBQLayout } from 'components/Layouts/BBQLayout';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { DetailsScreen } from 'features/BBQ/BBQScreens/DetailsScreen';
import { useSelector } from 'react-redux';
import store, { RootState } from 'store';

const PageBBQDetails = ({ eventId }: { eventId: string }) => {
  const { bbq } = useSelector((state: RootState) => state);
  const event = bbq.events.find((e) => e.id === eventId);

  return (
    <ProtectedRoute>
      <DetailsScreen {...event} date={new Date(event.date)} />
    </ProtectedRoute>
  );
};

PageBBQDetails.Layout = BBQLayout;

export async function getStaticPaths() {
  const paths = store.getState().bbq.events.map((event) => ({
    params: { id: String(event.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const findEvent = store
    .getState()
    .bbq.events.find((p) => String(p.id) === params.id);

  const event = { ...findEvent, date: findEvent.date.toISOString() };
  return { props: { event, eventId: params.id }, revalidate: 10 };
}

export default PageBBQDetails;
