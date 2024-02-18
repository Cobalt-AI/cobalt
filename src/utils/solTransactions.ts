const { Connection, PublicKey, Transaction, TransactionInstruction, SystemProgram } = require('@solana/web3.js');

// Configuración de la conexión a la red de Solana (mainnet-beta, devnet, etc.)
const network = 'https://api.devnet.solana.com'; // Ejemplo con la red de pruebas (Devnet)
const connection = new Connection(network, 'confirmed');

// Clave pública de tu wallet de plataforma y su clave privada (ten cuidado con esta información)
const plataformaPublicKey = new PublicKey('tu-clave-publica-de-plataforma-aqui');
const plataformaPrivateKey = 'tu-clave-privada-de-plataforma-aqui';

// Clave pública del usuario al que deseas transferir SOL
const usuarioPublicKey = new PublicKey('clave-publica-del-usuario-aqui');

// Función para realizar un depósito de SOL a la cuenta de la plataforma
async function depositarSol(cantidad) {
    try {
        // Construir una transacción para realizar el depósito
        const transaction = new Transaction().add(
            // Instrucción de transferencia de SOL
            SystemProgram.transfer({
                fromPubkey: usuarioPublicKey,
                toPubkey: plataformaPublicKey,
                lamports: cantidad * 1000000000, // Convertir a lamports (1 SOL = 1.000.000.000 lamports)
            })
        );

        // Firmar la transacción con la clave privada de la plataforma
        transaction.feePayer = plataformaPublicKey;
        const firmada = await connection.sendTransaction(transaction, [plataformaPrivateKey]);

        console.log('Depósito de SOL realizado:', firmada);
        return firmada;
    } catch (error) {
        console.error('Error al realizar el depósito de SOL:', error);
        throw error;
    }
}

// Función para transferir SOL de la cuenta de la plataforma a la cuenta de un usuario
async function transferirSolACuentaDeUsuario(cantidad) {
    try {
        // Construir una transacción para realizar la transferencia
        const transaction = new Transaction().add(
            // Instrucción de transferencia de SOL
            SystemProgram.transfer({
                fromPubkey: plataformaPublicKey,
                toPubkey: usuarioPublicKey,
                lamports: cantidad * 1000000000, // Convertir a lamports (1 SOL = 1.000.000.000 lamports)
            })
        );

        // Firmar la transacción con la clave privada de la plataforma
        transaction.feePayer = plataformaPublicKey;
        const firmada = await connection.sendTransaction(transaction, [plataformaPrivateKey]);

        console.log('Transferencia de SOL realizada:', firmada);
        return firmada;
    } catch (error) {
        console.error('Error al realizar la transferencia de SOL:', error);
        throw error;
    }
}

// Ejemplo de uso
async function main() {
    const cantidadDeposito = 1; // Cantidad de SOL a depositar
    await depositarSol(cantidadDeposito);

    const cantidadTransferencia = 0.5; // Cantidad de SOL a transferir
    await transferirSolACuentaDeUsuario(cantidadTransferencia);
}

main().catch(console.error);
