import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loader__content}>
      <span className={styles.loader}></span>
      Cargando...
    </div>
  );
};