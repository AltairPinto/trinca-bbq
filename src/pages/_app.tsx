import { ThemeProvider } from 'styled-components';
import theme from 'themes';
import '../styles/globals.css';

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
