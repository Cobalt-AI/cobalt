
import { useRouter } from 'next/router'
import { use, useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
    const router = useRouter()
    const projectId = router.query.id;

    const [project, setProject] = useState([]);

    const [data, setData] = useState([]);
    const [downloaded, setDownloaded] = useState(false)


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
        <div className="max-w-sm w-full flex flex-col gap-5    rounded-lg shadow">
            <h1 className='text-3xl'>Mis Proyectos</h1>
            {data.map((file) => (

                <div className="max-w-sm p-6 border  rounded-lg shadow">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            ))}
            <div className="  p-6  border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#" onClick={() => setDownloaded(true)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Descargar datos
                </a>
            </div>
            <div className="  p-6  border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#" onClick={() => setDownloaded(true)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Descargar datos
                </a>
            </div>
            <div className="  p-6  border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#" onClick={() => setDownloaded(true)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Descargar datos
                </a>
            </div>
        </div>
    )
}