import styles from "./requets.module.css";
import { Card } from "components/Card/Card";
import { MarketDataCard } from "components/MarketDataCard";
import { Sidebar } from "components/Sidebar";
import { FC, ReactNode, useEffect, useState } from "react";
import axios from "axios";

// Components
import { Loader } from "components/Loader";

interface ProjectsProps {
  children: ReactNode;
}

const Projects: FC<ProjectsProps> = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://back-production-8ab5.up.railway.app/api/v1/requests/",
          {
            headers: { Authorization: "Bearer tu_token_de_autorización" },
          }
        );
        setIsLoading(false);
        setData(response.data);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Llamar a la función fetchData cuando el componente se monte
  }, []);

  return (
    <div className={`${styles.container} `}>
      {isLoading && <Loader />}

      <div className={styles.container__slider}>
        <h3>Solicitudes de datos</h3>
        <section className={`${styles.slider} flex items-center mx-auto`}>
          {data.map((project) => (
            <Card project={project} key={project.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
