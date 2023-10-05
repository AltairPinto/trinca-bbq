import { BBQLayout } from 'components/Layouts/BBQLayout';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { HomeScreen } from 'features/BBQ/BBQScreens/HomeScreen';
import store from 'store';

const PageBBQ = ({ events }) => {
  return (
    <ProtectedRoute>
      <HomeScreen events={events} />
    </ProtectedRoute>
  );
};

PageBBQ.Layout = BBQLayout;

export async function getStaticProps() {
  const eventsTemp = store.getState().bbq.events;

  const events = [];
  eventsTemp.map((eventT) =>
    events.push({ ...eventT, date: String(eventT.date) }),
  );

  return { props: { events } };
}

export default PageBBQ;
