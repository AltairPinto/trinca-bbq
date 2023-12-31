import { Card } from 'components/Card';
import { Circle, Container } from './styles';
import theme from 'themes';
import Image from 'next/image';
import { Typography } from 'components/Typography';

interface BBQAddCardProps {
  onClick: () => void;
}

const BBQAddCard = ({ onClick }: BBQAddCardProps) => {
  return (
    <Card
      style={{
        backgroundColor: theme.colors.gray,
        justifyContent: 'center',
      }}
      onClick={onClick}
    >
      <Container>
        <Circle>
          <Image
            src="/icons/icon_bbq.svg"
            alt="People icon"
            width={40}
            height={44}
            loading="lazy"
          />
        </Circle>
      </Container>
      <Typography style={{ marginTop: '.5rem' }}> Adicionar Churras</Typography>
    </Card>
  );
};

export { BBQAddCard };
