import Link from "next/link";
import { Modal } from "../Modal";
import { Slider } from "../Slider";
import styles from "./styles.module.css";

export const Card = ({ className, project, owner }: any) => {
  function toggleModalVisibility() {
    const modal = document.getElementById("default-modal");
    if (modal) {
      // Aquí se verifica si el modal contiene la clase 'hidden'
      if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden"); // Remueve la clase 'hidden' para mostrar el modal
        modal.classList.add("flex"); // Añade 'flex' para hacerlo visible (o 'block', dependiendo de tu diseño)
      } else {
        modal.classList.add("hidden"); // Añade la clase 'hidden' para ocultar el modal
        modal.classList.remove("flex"); // Remueve 'flex' (o 'block') para asegurar que se oculta
      }
    }
  }

  const cost = (project.estimated_cost/1000000000).toFixed(3);

  return (
    <div className={styles.card__container}>
      <div className={styles.card__imageContainer}>
        <img
          className={styles.card__image}
          src={
            project.image_url ||
            "https://flowbite.com/docs/images/blog/image-1.jpg"
          }
          alt=""
        />
      </div>

      <div className={styles.container__description}>
        <p className={styles.title}>{project.name}</p>
        <p className={styles.subtitle}>{project.description}</p>
      </div>
      {/* <p>Tipo de datos: {project.request_type}</p> */}

      <div className={styles.cost__container}>
        <svg
          width="25"
          height="20"
          viewBox="0 0 30 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_13_957)">
            <path
              d="M0 6.0568C0.379518 5.67917 0.690361 5.37053 0.99759 5.06189C2.57711 3.47874 4.1494 1.88832 5.73976 0.312432C5.89518 0.156296 6.15181 0.0110526 6.36145 0.0110526C14.1398 -0.00347177 21.9145 0.000159313 29.6928 0.000159313C29.7578 0.000159313 29.8265 0.0110526 29.9675 0.0255769C29.8554 0.156296 29.7867 0.247073 29.7072 0.326957C27.8928 2.15339 26.0819 3.98346 24.253 5.79537C24.0976 5.94787 23.8337 6.07496 23.6205 6.07496C15.8458 6.08948 8.06747 6.08585 0.292771 6.08585C0.23494 6.08585 0.184337 6.07496 0 6.0568Z"
              fill="#0F1829"
            />
            <path
              d="M0.00366211 24.9746C1.24342 23.7292 2.40728 22.56 3.56752 21.3944C4.27957 20.6791 4.98077 19.9456 5.71812 19.2557C5.90969 19.0741 6.22414 18.9289 6.48439 18.9289C14.1362 18.9107 21.7916 18.9144 29.4434 18.9144C29.5952 18.9144 29.7506 18.9144 30 18.9144C29.8591 19.0814 29.7868 19.1758 29.7073 19.2557C27.9 21.064 26.1 22.8795 24.282 24.6733C24.1157 24.8367 23.8374 24.9819 23.6133 24.9819C15.8531 24.9964 8.09282 24.9964 0.336192 24.9964C0.260289 25.0001 0.195228 24.9892 0.00366211 24.9746Z"
              fill="#0F1829"
            />
            <path
              d="M29.9676 15.523C29.588 15.523 29.3314 15.523 29.0712 15.523C21.5567 15.523 14.0459 15.5194 6.53141 15.5302C6.16273 15.5302 5.90972 15.4141 5.6531 15.1526C3.92538 13.3988 2.1796 11.6559 0.437433 9.90933C0.328999 9.8004 0.231409 9.6842 0.043457 9.47723C0.422975 9.47723 0.679602 9.47723 0.939843 9.47723C8.4543 9.47723 15.9651 9.48086 23.4796 9.46997C23.8483 9.46997 24.1013 9.58617 24.3543 9.8476C26.0856 11.605 27.835 13.3443 29.5772 15.0945C29.682 15.1962 29.7796 15.3124 29.9676 15.523Z"
              fill="#0F1829"
            />
          </g>
          <defs>
            <clipPath id="clip0_13_957">
              <rect width="30" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className={styles.cost__text}>
          {cost} SOL
        </p>
      </div>

      <section className={styles.cart__footer}>
        {!owner && (
          <button
            onClick={toggleModalVisibility}
            className={styles.button__primary}
          >
            Atender Solicitud
            {/* <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg> */}
          </button>
        )}
      </section>
      {/* <div className="pt-2">

        <Slider />
        <p className="pt-6">Dinero disponible</p>


        {owner && (
          <Link
            href={`/my-projects/${project.id}`}
            onClick={toggleModalVisibility}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ver contribuciones
            <svg
              className="rtl:rotate-180 ml-3 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        )}
      </div> */}
      {!owner && <Modal toogle={toggleModalVisibility} proj={project} />}
    </div>
  );
};
