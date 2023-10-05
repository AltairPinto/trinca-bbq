import { useRouter } from 'next/router';
import { BBQAddCard } from './components/BBQAddCard';
import { BBQCard } from './components/BBQCard';
import { Container } from './styles';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { EventForm } from 'features/BBQ/BBQForms/EventForm';

const HomeScreen = ({ events }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

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
      <BBQAddCard onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <EventForm onClose={() => setIsOpen(false)} />
      </Modal>
    </Container>
  );
};

export { HomeScreen };
