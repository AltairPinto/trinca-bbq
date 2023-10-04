import { useRouter } from 'next/router';
import { mockedEvents } from './__mocks__';
import { BBQADDCard } from './components/BBQADDCard';
import { BBQCard } from './components/BBQCard';
import { Container } from './styles';

const HomeScreen = () => {
  const router = useRouter();
  return (
    <Container>
      {mockedEvents.map(({ id, title, guests, date }, key) => {
        const totalAmount = guests.reduce((total, person) => {
          if (person.confirmed) return total + person.amount;
          return total;
        }, 0);
        return (
          <BBQCard
            key={key}
            title={title}
            date={date}
            totalGuests={guests.length}
            totalAmount={totalAmount}
            onClick={() => router.push(`/bbq/${id}`)}
          />
        );
      })}
      <BBQADDCard />
    </Container>
  );
};

export { HomeScreen };
