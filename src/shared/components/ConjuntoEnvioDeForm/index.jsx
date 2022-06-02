import styles from "./Conjunto.module.css";

export const ConjuntoEnvioDeForm = ({
  contagem,
  min,
  max,
  value
}) => {
  return (
    <div className={styles.infoNext}>
      <div className={styles.range}>
        <div className={styles.barra}>
          <input type="range" min={min} max={max} value={value} />
        </div>
        <div className={styles.contagem}> {contagem}</div>
      </div>
    </div>
  );
};
