import { mockedEvents } from '__mocks__';
import { BBQLayout } from 'components/Layouts/BBQLayout';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { DetailsScreen } from 'features/BBQ/BBQScreens/DetailsScreen';
import { IBbq } from 'features/BBQ/BBQtypes';

const PageBBQDetails = ({ event }: { event: IBbq }) => {
  return (
    <ProtectedRoute>
      <DetailsScreen {...event} date={new Date(event.date)} />
    </ProtectedRoute>
  );
};

PageBBQDetails.Layout = BBQLayout;

export async function getStaticPaths() {
  const paths = mockedEvents.map((event) => ({
    params: { id: String(event.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const findEvent = mockedEvents.find((p) => String(p.id) === params.id);

  const event = { ...findEvent, date: findEvent.date.toISOString() };
  return { props: { event } };
}

export default PageBBQDetails;
