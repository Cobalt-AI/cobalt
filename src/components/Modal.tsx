import { useState } from "react";
import axios from 'axios';

export const Modal = ({ toogle, proj }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [formData, setFormData] = useState<FormData>();


    const handleFileChange = (event) => {
        // Acceder a la lista de archivos seleccionados
        const files = event.target.files;
        const selectedFilesArray = Array.from(files);

        const form = new FormData()
        form.append("owner", "mm8NKVixK7XLSLNpwKUH2Q5n2zGAzRRi9cyqndCYEnT")
        form.append("idRequest", proj.id)
        selectedFilesArray.forEach((file : any) => {
            form.append("files", file);
        });

        setFormData(form);

        // Actualizar el estado con los archivos seleccionados
        setSelectedFiles(selectedFilesArray);

        console.log("cambiado");
    };
    const [data, setData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://back-production-8ab5.up.railway.app/api/v1/requests/uploads/', formData);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <>
            <div id="default-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow-2xl dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {`Contribuir a "${proj.name}"`}
                            </h3>
                            <button type="button" onClick={toogle} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Cerrar</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4 ">
                            Sube un archivo con los datos
                            <div className="flex items-center justify-center w-full mt-2">
                                <label htmlFor="data" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="data" multiple type="file" onChange={handleFileChange} />
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 justify-between">
                            <button data-modal-hide="default-modal" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}