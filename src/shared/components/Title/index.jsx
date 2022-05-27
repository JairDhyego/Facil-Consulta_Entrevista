 import styles from "../Title/Title.module.css" 

export const Title = ({titulo} ) => {
  return (
    <h1 className={styles.title} > {titulo} </h1>

  )
}

