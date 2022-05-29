import { Botaoproximo } from "../Botaoproximo/index"
import styles from "./Conjunto.module.css"


export const ConjuntoRanger = ({contagem, caminho, min, max}) => {

  return (

    <div className={styles.infoNext}>
      <div className={styles.range}>
        <div className={styles.barra}>
          <input type="range" min={0} max={100} value="50" />
        </div>
        <div className={styles.contagem}> {contagem}</div>
      </div>

      <Botaoproximo proximo="Próximo" caminho={caminho} />

    </div>
  );
}

