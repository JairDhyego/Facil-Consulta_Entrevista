import styles from "./titleContainer.module.css"
import { Title } from './../Title/index';

export const TitleContainer = ({titulo}) => {

  return (

    <div className={styles.divContainerGeral}> <Title titulo={titulo} />  </div>
  );

}


/* { titulo }

titulo={titulo}  */