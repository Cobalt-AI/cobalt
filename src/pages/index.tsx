import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";
import { Sidebar } from "components/Sidebar";

const Home: NextPage = (props) => {
  return (
    <div>
      <Sidebar>
        
        <Head>
          <title>Solana Scaffold</title>
          <meta
            name="description"
            content="Solana Scaffold"
          />
        </Head>

        <HomeView />

      </Sidebar>
    </div>
  );
};

export default Home;
