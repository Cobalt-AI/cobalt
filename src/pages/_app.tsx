import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import { ContextProvider } from '../contexts/ContextProvider';
import { Sidebar } from 'components/Sidebar';
import Notifications from '../components/Notification';
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');
import { WalletAdapter } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import Key from 'components/key';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [publicKey, setPublicKey] = useState(null);
  const { publicKey: walletPublicKey, connect, disconnect } = useWallet();

  useEffect(() => {
    if (walletPublicKey) {
      setPublicKey(walletPublicKey.toBase58());
    } else {
      setPublicKey(null);
    }
  }, [walletPublicKey]);

  console.log(publicKey);


  return (
    <>
      <ContextProvider>
        <Sidebar>
          <div className="flex flex-col h-screen">
            <Notifications />

            <ContentContainer>
              <Component publicKey={publicKey} {...pageProps} />
            </ContentContainer>
            {/* <Footer /> */}
          </div>
        </Sidebar >
      </ContextProvider>
    </>
  );
}


export default App;
