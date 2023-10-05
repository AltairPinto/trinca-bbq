import { Typography } from 'components/Typography';
import { useSelector } from 'react-redux';
import { type RootState } from 'store';
import { Container } from './styles';
import { Button } from 'components/Button';
import { useRouter } from 'next/router';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  if (!user?.id) {
    return (
      <Container>
        <Typography variant="h2" color="error">
          Por favor, faça login para ver esta página.
        </Typography>
        <Button onClick={() => router.push('/')}>Voltar ao login</Button>
      </Container>
    );
  }

  return children;
};

export { ProtectedRoute };
