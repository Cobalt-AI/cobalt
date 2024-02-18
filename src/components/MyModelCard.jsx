import { useState } from "react";

export const MyModelCard = ({ address, contract }) => {
    const [showDemostration, setShowDemostration] = useState(false)
    const [modelLink, setModelLink] = useState('')
    const [img, setImg] = useState("")


    const handleLike = async (num) => {
        // setIsTraining(false)
        const result2 = await contract.methods.RecibirGusta(num).send({
            from: address,
        });
        const result = await contract.methods.RecibirGusta(num).call({
            from: address,
        })
        setModelLink(result)
    }

    const viewDemostration = async () => {
        setShowDemostration(true)
        // Llama a la función LeerNecesidad en el contrato

        const result = await contract.methods.LeerSolucion().call()
        // Actualiza los estados con los valores devueltos
        setImg(result);
        // setBalance(web3.utils.fromWei(result[3], 'ether')); // Convierte el balance de wei a ether
    }
    return (
        <>
            {modelLink && <a href={modelLink}>Descargar modelo entrenado</a>}
            <div className={`my-5 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 `}>
                <div className=" p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modelo 1</h5>
                    <hr />
                    <div className="pt-5 flex flex-row justify-between">
                        {showDemostration ? <>
                            <img className="max-w-2xl my-3" src={img} alt="imagen de demostracion" />
                            <div className="flex flex-row space-x-6">
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleLike(1)}>¡Me gustó! 👍 | Descargar modelo</button>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleLike(0)}>¡No me gustó! 😡 | Recivir devolución</button>
                            </div>
                        </> : <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={viewDemostration}>Ver demostracion</button>}
                    </div>
                </div>
            </div >
        </>
    )
}