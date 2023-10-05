import { ThemeProvider } from 'styled-components';
import theme from 'themes';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from 'store';

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
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
