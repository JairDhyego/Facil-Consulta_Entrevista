import styles from "../Botaoproximo/Botaoproximo.module.css"


export const Botaoproximo = ({proximo, caminho}) => {

  return (
    <button to={caminho} className={styles.botaDeProximo}> {proximo} </button>

  )

} 


 