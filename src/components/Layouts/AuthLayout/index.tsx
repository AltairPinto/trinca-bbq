import { ReactNode } from 'react';
import { Container, Content } from './styles';
import { Typography } from 'components/Typography';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Container>
      <Content>
        <Typography variant="h1">Agenda de Churras</Typography>
        {children}
      </Content>
    </Container>
  );
};

export { AuthLayout };
