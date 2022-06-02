import styles from "../Botaoproximo/Botaoproximo.module.css";

export const Botaoproximo = ({ proximo}) => {
  return (
    <button className={styles.botaoDeProximo}>
     {proximo}
    </button>
  );
};
