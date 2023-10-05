import { Typography } from 'components/Typography';
import { Container, Left, Right } from './styles';
import type { Guest as IGuest } from 'features/BBQ/BBQtypes';
import Image from 'next/image';
import { formatToReais } from 'utils/currencyUtils';

const Guest: React.FC<IGuest> = ({ user, confirmed, amount }) => {
  return (
    <Container>
      <Left>
        <Image
          src={`/icons/icon_${confirmed ? 'full' : 'empty'}_circle.svg`}
          alt="Confirmation indicator icon"
          width={25}
          height={25}
          loading="lazy"
        />
        <Typography>{user?.name}</Typography>
      </Left>
      <Right confirmed={confirmed}>{formatToReais(amount)} </Right>
    </Container>
  );
};

export { Guest };
