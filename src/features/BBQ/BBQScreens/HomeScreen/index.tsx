import { useRouter } from 'next/router';
import { BBQAddCard } from 'features/BBQ/BBQScreens/HomeScreen/components/BBQAddCard';
import { BBQCard } from 'features/BBQ/BBQScreens/HomeScreen/components/BBQCard';
import { BackContainer, Container } from './styles';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { EventForm } from 'features/BBQ/BBQForms/EventForm';
import Image from 'next/image';
import { Typography } from 'components/Typography';
import { useDispatch } from 'react-redux';
import { logout } from 'ducks/authSlice';

const HomeScreen = ({ events }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <BackContainer
        onClick={() => {
          dispatch(logout());
          router.push('/');
        }}
      >
        <Image
          src="/icons/icon_arrow_back.svg"
          alt="Arrow back icon"
          width={18}
          height={15}
          loading="lazy"
        />
        <Typography>Sair</Typography>
      </BackContainer>
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
