import styles from "./Subtitulo.module.css"


export const Subtitulo = ({ texto }) => {

  return (

    <h2 className={styles.Subtitulo} > {texto}  </h2>
  );
}