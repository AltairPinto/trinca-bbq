import { ThemeProvider } from 'styled-components';
import theme from 'themes';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from 'store';
import { Toaster } from 'react-hot-toast';

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster position="bottom-center" reverseOrder={false} />
      </ThemeProvider>
    </Provider>
  );
}

export async function getServerSideProps() {
  const initialState = store.getState();

  return {
    props: {
      initialState,
    },
  };
}

export default MyApp;
