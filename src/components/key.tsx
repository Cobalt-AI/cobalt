import { useState, useEffect } from 'react';
import { WalletAdapter } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';

function Key() {
  const [publicKey, setPublicKey] = useState(null);
  const { publicKey: walletPublicKey, connect, disconnect } = useWallet();

  useEffect(() => {
    if (walletPublicKey) {
      setPublicKey(walletPublicKey.toBase58());
    } else {
      setPublicKey(null);
    }
  }, [walletPublicKey]);

  return (
    <div>
      <h1>My Solana App</h1>
      <button onClick={() => connect()}>Connect to Wallet</button>
      <button onClick={() => disconnect()}>Disconnect Wallet</button>
      {publicKey && <p>Public Key: {publicKey}</p>}
    </div>
  );
}

export default Key;
