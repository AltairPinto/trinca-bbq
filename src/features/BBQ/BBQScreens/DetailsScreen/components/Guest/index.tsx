import { Container, Left, Right, Amount } from './styles';
import { handlePayment, removeGuest } from 'ducks/bbqSlice';
import Image from 'next/image';
import { formatToReais } from 'utils/currencyUtils';
import { useDispatch } from 'react-redux';
import type { Guest as IGuest } from 'features/BBQ/BBQtypes';
import { Checkbox } from 'components/Inputs/Checkbox';

type GuestProps = IGuest & { eventId: string };

const Guest: React.FC<GuestProps> = ({
  id,
  name,
  confirmed,
  amount,
  eventId,
}) => {
  const dispatch = useDispatch();

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
      </Left>
      <Right>
        <Amount confirmed={confirmed}>{formatToReais(amount)}</Amount>{' '}
        <Image
          src="/icons/icon_trash.svg"
          alt="Remove guest icon"
          width={25}
          height={25}
          loading="lazy"
          onClick={() =>
            dispatch(
              removeGuest({
                eventId: eventId,
                guestId: id,
              }),
            )
          }
          style={{ cursor: 'pointer' }}
        />
      </Right>
    </Container>
  );
};

export { Guest };
