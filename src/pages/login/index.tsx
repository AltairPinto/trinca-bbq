import { AuthLayout } from 'components/Layouts/AuthLayout';
import { LoginScreen } from 'features/Auth/AuthScreens/LoginScreen';

const PageLogin = () => {
  return <LoginScreen />;
};

PageLogin.Layout = AuthLayout;

export default PageLogin;
