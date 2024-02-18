import { MarketDataCard } from "components/MarketDataCard";
import styles from "./styles.module.css";
import { FC, ReactNode, useMemo, useState } from "react";
import { Modal } from "components/Modal";
import axios from "axios";
import { useRouter } from "next/router"; // Importa useRouter

// Components
import { Select } from "components/Select";
import { Input } from "components/Input";
import { Loader } from "components/Loader";

interface NewProps {
  children: ReactNode;
}

const DATA_TYPES = ["Texto", "Imagen", "Video", "Otro"];

const NewRequestData: FC<NewProps> = ({ children }) => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dataSize, setDataSize] = useState("");
  const [dataType, setDataType] = useState("");
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter(); // Usa el hook useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Crear un objeto con los datos a enviar a la API
    const project = {
      name: name,
      description: description,
      image_url:
        "https://www.nationalgeographic.com.es/medio/2023/12/14/parkinson_4e0a426b_231214105821_1280x853.jpg",
      data_size: dataSize,
      estimated_cost: 10, //$valor.value,
      request_type: dataType,
      owner: "VEM5ghF1Zw9t6CUcmdCKAhbbhj5HvFmhza5NwfWVFVC",
      owner_private_key:
        "43sEYU1J5cNto2bCDRFye8zKJim8Eoyn1NXwvQtoXtM5WgvEPtdNLmRrqbUYDpkz8h6ouAqNJ3HfP5aEAkXq6bH1",
    };

    console.log(project);

    try {
      const response = await axios.post(
        "https://back-production-8ab5.up.railway.app/api/v1/requests/",
        project
      );
      setData(response.data);

      setIsLoading(false);
      router.push("/"); // Usa router.push para redireccionar
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  const isValidForm = useMemo(() => {
    return (
      name.length > 0 &&
      description.length > 0 &&
      dataSize.length > 0 &&
      dataType.length > 0 &&
      checked
    );
  }, [name, description, checked, dataSize, dataType]);

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}

      <h3>Crear solicitud de datos</h3>

      <form className="w-full h-full">
        <div className={styles.form}>
          <Input placeholder="Nombre del proyecto" onChange={setName} />
          <Input
            placeholder="Descripción del proyecto"
            onChange={setDescription}
          />
          <Input
            placeholder="Cantidad de datos"
            type="number"
            onChange={setDataSize}
          />
          <Select
            placeholder="Tipo de datos"
            dataOptions={DATA_TYPES}
            onChange={setDataType}
          />
        </div>
        {/* Imágen de referencia
        <div className="flex items-center justify-center w-full mt-2">
          <label
            htmlFor="imgUrl"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="imgUrl" type="file" className="hidden" />
          </label>
        </div> */}
        {/* <div className="mb-6">
                    <label htmlFor="valor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor a transferir (SOL)</label>
                    <input type="" id="valor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div> */}
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
              onChange={(e) => setChecked(e.target.checked)}
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>

        <button
          type="button"
          disabled={!isValidForm}
          onClick={handleSubmit}
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className={styles.button__primary}
        >
          Continuar
        </button>
        {/* <Modal toogle={toggleModalVisibility} /> */}
      </form>
    </div>
  );
};

export default NewRequestData;
