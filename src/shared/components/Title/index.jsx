import styles from "./titleContainer.module.css"

export const Title = ({titulo}) => {

  return (

    <div className={styles.divContainerGeral}> 
        <h1 className={styles.title}> {titulo} </h1>
    </div>
  );

}


/* { titulo }

titulo={titulo}  */