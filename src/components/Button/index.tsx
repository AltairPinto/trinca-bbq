import { Container } from './styles';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean | undefined;
  style?: React.CSSProperties;
}

const Button = ({
  type = 'button',
  children,
  onClick,
  disabled,
  style,
}: ButtonProps) => {
  return (
    <Container type={type} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </Container>
  );
};

export { Button };
