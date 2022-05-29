import styles from "./Botao.module.css"

import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export const BackButton = () => {

  const navigate = useNavigate();

  const returnPage = () => {
    navigate(-1)
  }


  return (

    <Link to={"/"}  onClick={returnPage} className={styles.BotaoDeVoltar} > <FaAngleLeft /> </Link>
  );
};