import { ReactNode } from 'react';
import { Container } from './styles';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <Container>{children}</Container>;
};

export { AuthLayout };
