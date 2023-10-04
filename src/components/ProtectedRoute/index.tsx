import { Typography } from 'components/Typography';
import { useSelector } from 'react-redux';
import { type RootState } from 'store';
import { Container } from './styles';
import { Button } from 'components/Button';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  if (!user?.id) {
    return (
      <Container>
        <Typography variant="h1" color="error">
          Por favor, faça login para ver esta página.
        </Typography>
        <Button onClick={() => router.push('/')}>Voltar ao login</Button>
      </Container>
    );
  }

  return children;
};

export { ProtectedRoute };
