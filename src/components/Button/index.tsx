import { Container } from './styles';
import theme from 'themes';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean | undefined;
  style?: React.CSSProperties;
  color?: string;
}

const Button = ({
  type = 'button',
  children,
  onClick,
  disabled,
  style,
  color = 'black',
}: ButtonProps) => {
  return (
    <Container
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      color={theme.colors[color]}
    >
      {children}
    </Container>
  );
};

export { Button };
