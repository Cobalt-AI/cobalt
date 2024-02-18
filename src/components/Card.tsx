import Link from "next/link";
import { Modal } from "./Modal";
import { Slider } from "./Slider"

export const Card = ({ className, project, owner }: any) => {

    function toggleModalVisibility() {
        const modal = document.getElementById('default-modal');
        if (modal) {
            // Aquí se verifica si el modal contiene la clase 'hidden'
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden'); // Remueve la clase 'hidden' para mostrar el modal
                modal.classList.add('flex'); // Añade 'flex' para hacerlo visible (o 'block', dependiendo de tu diseño)
            } else {
                modal.classList.add('hidden'); // Añade la clase 'hidden' para ocultar el modal
                modal.classList.remove('flex'); // Remueve 'flex' (o 'block') para asegurar que se oculta
            }
        }
    }

    return (
        <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`}>
            <a href="#">
                <img className="rounded-t-lg" src={project.image_url || "https://flowbite.com/docs/images/blog/image-1.jpg"} alt="" />
            </a>
            <div className="p-5">
                <p className="mb-6">Tipo de datos: {project.request_type}</p>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>

                <Slider />
                <p className="pt-6">Dinero disponible</p>
                <h3 className="text-2xl pb-6">{project.estimated_cost} SOL</h3>

                {!owner && <button onClick={toggleModalVisibility} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Contribuir
                    <svg className="rtl:rotate-180 ml-3 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>}

                {owner && <Link href={`/my-projects/${project.id}`} onClick={toggleModalVisibility} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ver contribuciones
                    <svg className="rtl:rotate-180 ml-3 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>}
            </div>
            {!owner && <Modal toogle={toggleModalVisibility} proj={project}/>}
        </div>

    )
}