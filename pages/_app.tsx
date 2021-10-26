import { Box, Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { SWRConfig } from 'swr';
import { ThemeModeProvider } from '../contexts/ThemeModeContext';
import Layout from '../layouts/layout';
import '../styles/globals.css';

interface Props {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  // useEffect(() => {
  //   console.log('theme in _app: ', test);
  //   setTheme(test);
  // }, [test]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  });

  return (
    <React.Fragment>
      <Head>
        <title> PokeTry </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeModeProvider>
        <Layout>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <SWRConfig
            value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
          >
            <Container maxWidth={false}>
              <Box marginTop={2}>
                <Component {...pageProps} />
              </Box>
            </Container>
          </SWRConfig>
        </Layout>
      </ThemeModeProvider>
    </React.Fragment>
  );
};

export default MyApp;
