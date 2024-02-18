import { Card } from 'components/Card/Card';
import { MarketDataCard } from 'components/MarketDataCard';
import { Sidebar } from 'components/Sidebar';
import { FC, ReactNode, useEffect, useState } from 'react';
import { Modal } from 'components/Modal';
import axios from 'axios';
import { WalletAdapter } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';

const MyProjects = ({ children, pubKey }) => {
    const [publicKey, setPublicKey] = useState(null);
    const { publicKey: walletPublicKey, connect, disconnect } = useWallet();
    const [data, setData] = useState([]);
    const [userProjects, setUserProjects] = useState([]);

    useEffect(() => {
        if (walletPublicKey) {
            setPublicKey(walletPublicKey.toBase58());
        } else {
            setPublicKey(null);
        }
    }, [walletPublicKey]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://back-production-8ab5.up.railway.app/api/v1/requests/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Llamar a la función fetchData cuando el componente se monte

    }, []);
    console.log(data);


    useEffect(() => {
        setUserProjects(data.filter(proj => {
            return proj.owner === publicKey
        }));
    }, [data]);


    return (
        <div>
            <>
                <h1 className='text-3xl text-[#0F1829]'>Proyectos</h1>
                {userProjects.map((project) => <Card key={project.id} owner project={project} className="mt-6" />)}
            </>
        </div>
    );
}





export default MyProjects