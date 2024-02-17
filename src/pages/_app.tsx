import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification';
import { ContextProvider } from '../contexts/ContextProvider';
import { supabase } from '../utils/supabase';
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
      function getTodos() {
        supabase.from('todos').select().then(({ data: todos }) => {
          console.log(todos)

          if (todos.length > 1) {
            setTodos(todos)
          }
        });
      }

      getTodos()
    }, [])

    return (
        <>
          <Head>
            <title>Solana Scaffold Lite</title>
          </Head>

          <ContextProvider>
            <div className="flex flex-col h-screen">
              <Notifications />
              <AppBar/>
              <ContentContainer>
                <Component {...pageProps} />
                <Footer/>
              </ContentContainer>
            </div>
            <div>
              {todos.map((todo) => (
                <li key={todo}>{todo}</li>
              ))}
            </div>
          </ContextProvider>          
        </>
    );
};

export default App;
