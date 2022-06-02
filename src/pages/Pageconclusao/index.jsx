import { Link } from "react-router-dom";
import styles from "./Conclusao.module.css";
import { BackButton } from './../../shared/components/BackButton/index';
import { useContext } from "react";
import { UserContext } from "../../shared/contexts";

export const Pageconclusao = () => {

  const { formData } = useContext(UserContext);

  
  return (
    <main>
      <BackButton />

      <div className={styles.containerFinal}>
        <h1>
          Olá {}, você foi cadastrado no sistema com sucesso! <br />
          <span>Muito obrigado por trabalhar conosco, até mais! </span>
        </h1>

        <Link className={styles.sair} to="/">
          Sair
        </Link>
      </div>
    </main>
  );
};
