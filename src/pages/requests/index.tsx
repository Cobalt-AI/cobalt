import styles from "./requets.module.css";
import { Card } from "components/Card/Card";
import { MarketDataCard } from "components/MarketDataCard";
import { Sidebar } from "components/Sidebar";
import { FC, ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface ProjectsProps {
  children: ReactNode;
}

const Projects: FC<ProjectsProps> = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://back-production-8ab5.up.railway.app/api/v1/requests/",
          {
            headers: { Authorization: "Bearer tu_token_de_autorización" },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Llamar a la función fetchData cuando el componente se monte
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.slider}>
        {data.map((project) => (
          <Card project={project} key={project.id}/>
        ))}
      </section>
    </div>
  );
};

export default Projects;
