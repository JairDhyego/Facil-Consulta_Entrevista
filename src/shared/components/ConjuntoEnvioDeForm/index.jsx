import styles from "./Conjunto.module.css"


export const ConjuntoEnvioDeForm = ({ contagem, caminho, submit, min, max }) => {

  return (

    <div className={styles.infoNext}>
      <div className={styles.range}>
        <div className={styles.barra}>
          <input type="range" min={0} max={100} value="50" />
        </div>
        <div className={styles.contagem}> {contagem}</div>
      </div>
      <button type={submit} className={styles.spanEnvio} >  próximo </button>
    </div>
  );
}

