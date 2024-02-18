import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, AnchorProvider, web3, utils } from '@project-serum/anchor';

const programID = new PublicKey('Fg6S...etc'); // Reemplaza con la ID de tu programa
const network = clusterApiUrl('devnet');
const connection = new Connection(network, "processed");
const provider = new AnchorProvider(connection, window.solana, "processed");

export default function Home() {
  async function setNumber() {
    const program = new Program(idl, programID, provider);

    // Obtén la cuenta pública del usuario (asegúrate de que se haya conectado con Phantom u otra wallet)
    const publicKey = provider.wallet.publicKey;

    try {
      // Llama a la función del smart contract
      await program.rpc.setNumber(new utils.BN(42), {
        accounts: {
          myAccount: publicKey,
        },
      });

      console.log('Número establecido exitosamente');
    } catch (error) {
      console.error('Error estableciendo el número:', error);
    }
  }

  return (
    <div>
      <button onClick={setNumber}>Establecer Número</button>
    </div>
  );
}
