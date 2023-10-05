import { useRouter } from 'next/router';
import { BBQAddCard } from './components/BBQAddCard';
import { BBQCard } from './components/BBQCard';
import { Container } from './styles';

const HomeScreen = ({ events }) => {
  const router = useRouter();

  return (
    <Container>
      {events?.map(({ id, title, guests, date }, key) => {
        const totalAmount = guests.reduce((total, person) => {
          return total + person.amount;
        }, 0);
        return (
          <BBQCard
            key={key}
            title={title}
            date={new Date(date)}
            totalGuests={guests.length}
            totalAmount={totalAmount}
            onClick={() => router.push(`/bbq/${id}`)}
          />
        );
      })}
      <BBQAddCard />
    </Container>
  );
};

export { HomeScreen };
