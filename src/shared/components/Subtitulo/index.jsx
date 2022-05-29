import styles from "./Subtitulo.module.css"


export const Subtitulo = ({ texto }) => {

  return (

    <p className={styles.Componentsubtitulo} >  {texto}   </p>
  );
}