import { Card } from 'components/Card/Card';
import { MarketDataCard } from 'components/MarketDataCard';
import { Sidebar } from 'components/Sidebar';
import { FC, ReactNode, useState } from 'react';
import { Modal } from 'components/Modal';
import axios from 'axios';
import { redirect } from 'next/navigation'



interface NewProps {
    children: ReactNode;
}

const New: FC<NewProps> = ({ children }) => {
    const [data, setData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Obtener los valores del formulario
        const $nombre = document.getElementById("nombre") as HTMLInputElement;
        const $descripcion = document.getElementById("descripcion") as HTMLInputElement;
        const $imgUrl = document.getElementById("imgUrl") as HTMLInputElement;
        const $cantidad = document.getElementById("cantidad") as HTMLInputElement;
        const $valor = document.getElementById("valor") as HTMLInputElement;
        const $tipo = document.getElementById("tipo") as HTMLInputElement;

        // Crear un objeto con los datos a enviar a la API
        const project = {
            name: $nombre.value,
            description: $descripcion.value,
            image_url: 'https://www.nationalgeographic.com.es/medio/2023/12/14/parkinson_4e0a426b_231214105821_1280x853.jpg',
            data_size: $cantidad.value,
            estimated_cost: 10, //$valor.value,
            request_type: $tipo.value,
            owner: "VEM5ghF1Zw9t6CUcmdCKAhbbhj5HvFmhza5NwfWVFVC",
            owner_private_key: "43sEYU1J5cNto2bCDRFye8zKJim8Eoyn1NXwvQtoXtM5WgvEPtdNLmRrqbUYDpkz8h6ouAqNJ3HfP5aEAkXq6bH1"
        };

        console.log(project);
        

        try {
            const response = await axios.post('https://back-production-8ab5.up.railway.app/api/v1/requests/', project);
            setData(response.data);

            redirect("/")
            alert("Proyecto creado exitosamente")
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <>
            <form className='w-full'>
                <div className="mb-6">
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del proyecto</label>
                    <input type="" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción del proyecto</label>
                    <input type="" id="descripcion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                Imágen de referencia
                <div className="flex items-center justify-center w-full mt-2">
                    <label htmlFor="imgUrl" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="imgUrl" type="file" className="hidden" />
                    </label>
                </div>
                <div className="mb-6">
                    <label htmlFor="cantidad" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad de datos</label>
                    <input type="" id="cantidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                {/* <div className="mb-6">
                    <label htmlFor="valor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor a transferir (SOL)</label>
                    <input type="" id="valor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div> */}
                <label htmlFor="tipo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de datos</label>
                <select id="tipo" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Selecciona una opción</option>
                    <option value="Texto">Texto</option>
                    <option value="Imagen">Imagen</option>
                    <option value="Video">Video</option>
                    <option value="Otro">Otro</option>
                </select>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                <button type="submit" onClick={handleSubmit} data-modal-target="default-modal" data-modal-toggle="default-modal" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continuar</button>
                {/* <Modal toogle={toggleModalVisibility} /> */}
            </form>
        </>
    )
}

export default New