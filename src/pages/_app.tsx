import { ThemeProvider } from 'styled-components';
import theme from 'themes';
import '../styles/globals.css';
import { createWrapper } from 'next-redux-wrapper';
import store from 'store';
import { Toaster } from 'react-hot-toast';

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster position="bottom-center" reverseOrder={false} />
    </ThemeProvider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
