import { Card } from 'components/Card';
import { MarketDataCard } from 'components/MarketDataCard';
import { Sidebar } from 'components/Sidebar';
import { FC, ReactNode, useEffect, useState } from 'react';
import { Modal } from 'components/Modal';
import axios from 'axios';
import Key from 'components/key';

const MyProjects = ({ children }) => {
    const [data, setData] = useState([]);
    const [userProjects, setUserProjects] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://back-production-8ab5.up.railway.app/api/v1/requests/');
                setData(response.data);
                
                setUserProjects(data.filter(proj => proj.owner === "VEM5ghF1Zw9t6CUcmdCKAhbbhj5HvFmhza5NwfWVFVC"))
                console.log(data);
                

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Llamar a la función fetchData cuando el componente se monte

    }, []);

    return (
        <>
            <h1 className='text-3xl'>Proyectos</h1>
            {userProjects.map((project) => <Card owner project={project} className="mt-6" />)}
            <Key/>
        </>
    )
}

export default MyProjects