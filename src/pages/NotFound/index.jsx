import styles from "../Pageconclusao/conclusao.module.css";
import { Title } from "./../../shared/components/Title";
import { Link } from "react-router-dom";
import { Subtitulo } from "./../../shared/components/Subtitulo/index";

export const NoutFound = () => {
  return (
    <main>
      <BackButton />
      <div className={styles.containerFinal}>
        <Title titulo="Página Não encontrada." />
        <Subtitulo texto="Error 404: Olhe a url no inicio da pagina e veja se está correta. " />
        <Link to="/" className={styles.sair}>
          Inicio
        </Link>
      </div>
    </main>
  );
};
