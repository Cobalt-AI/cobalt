import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import { ContextProvider } from '../contexts/ContextProvider';
import { Sidebar } from 'components/Sidebar';
import Notifications from '../components/Notification';
import { supabase } from '../utils/supabase';
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <>
      <ContextProvider>
        <Sidebar>
          <Head>
            <title>Solana Scaffold Lite</title>
          </Head>

          <div className="flex flex-col h-screen">
            <Notifications />

            <ContentContainer>
              <Component {...pageProps} />
            </ContentContainer>
            {/* <Footer /> */}
          </div>
        </Sidebar >
      </ContextProvider>
    </>
  );
}


export default App;
