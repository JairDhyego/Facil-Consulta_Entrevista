import { Link } from 'react-router-dom';
import styles from "../Botaoproximo/Botaoproximo.module.css"



export const Botaoproximo = ({proximo, caminho}) => {

  return (
    <Link to={caminho} className = { styles.botaDeProximo}> {proximo} </Link>

  )

} 


 