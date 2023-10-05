import { Button } from 'components/Button';
import { ActionContainer, Container } from './styles';
import { useDispatch } from 'react-redux';
import { Typography } from 'components/Typography';
import { useCallback } from 'react';
import { removeEvent } from 'ducks/bbqSlice';
import { useRouter } from 'next/router';

interface EventRemoveProps {
  onClose: () => void;
  eventId: string;
  name: string;
}

const EventRemove = ({ onClose, eventId, name }: EventRemoveProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onRemoveEvent = useCallback(() => {
    dispatch(removeEvent(eventId));
    return router.push('/bbq');
  }, [dispatch, eventId, router]);

  return (
    <Container>
      <Typography>Deseja remover o Churras {`"${name}"`}? </Typography>
      <ActionContainer>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onRemoveEvent} color="secondary">
          Remover
        </Button>
      </ActionContainer>
    </Container>
  );
};

export { EventRemove };
