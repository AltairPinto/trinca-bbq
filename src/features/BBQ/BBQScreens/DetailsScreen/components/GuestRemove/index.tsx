import { Button } from 'components/Button';
import { ActionContainer, Container } from './styles';
import { useDispatch } from 'react-redux';
import { Typography } from 'components/Typography';
import { useCallback } from 'react';
import { removeGuest } from 'ducks/bbqSlice';

interface GuestRemoveProps {
  onClose: () => void;
  eventId: string;
  guestId: string;
  name: string;
}

const GuestRemove = ({ onClose, eventId, guestId, name }: GuestRemoveProps) => {
  const dispatch = useDispatch();

  const onRemoveEvent = useCallback(() => {
    dispatch(removeGuest({ eventId, guestId }));
    return onClose();
  }, [dispatch, eventId, guestId, onClose]);

  return (
    <Container>
      <Typography>Deseja remover {`"${name}"`} do Churras? </Typography>
      <ActionContainer>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onRemoveEvent} color="secondary">
          Remover
        </Button>
      </ActionContainer>
    </Container>
  );
};

export { GuestRemove };
