
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
    const router = useRouter()
    const projectId = router.query.id;

    const [project, setProject] = useState([]);

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`https://back-production-8ab5.up.railway.app/api/v1/requests/${projectId}`);
                setProject(response.data);

            } catch (error) {
                console.error('Error fetching Project:', error);
            }
        };

        fetchProject(); // Llamar a la función fetchProject cuando el componente se monte

    }, []);

    return (
        <div className="max-w-sm max-h-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
        </div>
    )
}