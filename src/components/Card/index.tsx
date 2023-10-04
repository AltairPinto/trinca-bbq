import { Container } from './styles';

interface ICard {
  key?: string | number;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick: () => void;
}

const Card = ({ key, children, style, onClick }: ICard) => {
  return (
    <Container key={key} style={style} onClick={onClick}>
      {children}
    </Container>
  );
};

export { Card };
