import { BBQLayout } from 'components/Layouts/BBQLayout';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { HomeScreen } from 'features/BBQ/BBQScreens/HomeScreen';
import { BBQEvent } from 'features/BBQ/BBQtypes';
import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import store, { RootState } from 'store';

const PageBBQ = ({ events }: { events: BBQEvent[] }) => {
  const state = useSelector((state: RootState) => state);

  const [eventsT, setEvents] = useState(events);

  useLayoutEffect(() => {
    if (state.bbq.events !== events) setEvents(state.bbq.events);
  }, [events, state.bbq.events]);

  return (
    <ProtectedRoute>
      <HomeScreen events={eventsT} />
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
  return { props: { events }, revalidate: 60 };
}

export default PageBBQ;
