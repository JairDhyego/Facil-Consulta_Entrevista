import { Link } from "react-router-dom";
import styles from "./Conclusao.module.css";
import { BackButton } from './../../shared/components/BackButton/index';

export const Pageconclusao = () => {
  return (
    <main>
      <BackButton />

      <div className={styles.containerFinal}>
        <h1>
          Olá xxx, você foi cadastrado no sistema com sucesso! <br />
          <span>Muito obrigado por trabalhar conosco, até mais! </span>
        </h1>

        <Link className={styles.sair} to="/">
          Sair
        </Link>
      </div>
    </main>
  );
};
