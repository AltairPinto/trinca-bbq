import { BBQLayout } from 'components/Layouts/BBQLayout';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { HomeScreen } from 'features/BBQ/BBQScreens/HomeScreen';
import { useSelector } from 'react-redux';
import store, { RootState } from 'store';

const PageBBQ = () => {
  const { events } = useSelector((state: RootState) => state.bbq);

  return (
    <ProtectedRoute>
      <HomeScreen events={events} />
    </ProtectedRoute>
  );
};

PageBBQ.Layout = BBQLayout;

export async function getStaticProps() {
  // Simulador de requisição
  const eventsTemp = store.getState().bbq.events;

  const events = [];
  eventsTemp.map((eventT) =>
    events.push({ ...eventT, date: String(eventT.date) }),
  );
  return { props: { events }, revalidate: 10 };
}

export default PageBBQ;
