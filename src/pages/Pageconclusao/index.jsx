import { Link } from "react-router-dom";
import styles from "../Pageconclusao/Conclusao.module.css"



export const Pageconclusao = () => {
  return (

    <main className={styles.containerFinal}>

      <h1> Olá xxx, você foi cadastrado no sistema com sucesso!
        Muito obrigado por trabalhar conosco, até mais!</h1>

      <Link className={styles.sair} to="/" > Sair  </Link>
    </main>



  );
};