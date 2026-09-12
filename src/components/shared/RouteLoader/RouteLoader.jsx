import styles from "./RouteLoader.module.css";

export default function RouteLoader() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Cargando">
      <div className={styles.spinner} />
    </div>
  );
}
