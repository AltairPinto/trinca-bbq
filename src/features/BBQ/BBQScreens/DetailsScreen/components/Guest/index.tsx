import { Container, Left, Right, Amount } from './styles';
import { handlePayment } from 'ducks/bbqSlice';
import Image from 'next/image';
import { formatToReais } from 'utils/currencyUtils';
import { useDispatch } from 'react-redux';
import type { Guest as IGuest } from 'features/BBQ/BBQtypes';
import { Checkbox } from 'components/Inputs/Checkbox';
import { Modal } from 'components/Modal';
import { GuestRemove } from '../GuestRemove';
import { useState } from 'react';

type GuestProps = IGuest & { eventId: string };

const Guest = ({
  id,
  name,
  confirmed,
  amount,
  withBeer,
  eventId,
}: GuestProps) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Checkbox
          checked={confirmed}
          title={name}
          onClick={() =>
            dispatch(
              handlePayment({
                eventId: eventId,
                guestId: id,
                confirmed: !confirmed,
              }),
            )
          }
        />
        {withBeer && (
          <Image
            src="/icons/icon_beer.svg"
            alt="Beer icon"
            width={25}
            height={25}
            loading="lazy"
          />
        )}
      </Left>
      <Right>
        <Amount confirmed={confirmed}>{formatToReais(amount)}</Amount>{' '}
        <Image
          src="/icons/icon_trash.svg"
          alt="Remove guest icon"
          width={25}
          height={25}
          loading="lazy"
          onClick={() => setIsOpen(true)}
          style={{ cursor: 'pointer' }}
        />
      </Right>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <GuestRemove
          guestId={id}
          eventId={eventId}
          name={name}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </Container>
  );
};

export { Guest };
