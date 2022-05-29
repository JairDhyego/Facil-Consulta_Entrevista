import styles from "./Label.module.css"

export const Label = ({ texto }) => {


  return (

    <label className={styles.label} >{texto}</label>
  );
}