import { LoginForm } from 'components/Forms/LoginForm';
import { Typography } from 'components/Typography';
import { Container } from './styles';

const LoginScreen = () => {
  return (
    <Container>
      <Typography variant="h1">Agenda de Churras</Typography>
      <LoginForm />
    </Container>
  );
};

export { LoginScreen };
