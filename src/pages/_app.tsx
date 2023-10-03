import { ThemeProvider } from 'styled-components';
import theme from 'themes';
import '../styles/globals.css';
import Head from 'next/head';

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
