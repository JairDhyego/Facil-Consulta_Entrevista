import styles from "./Input.module.css"

export const Input = ({ type, placeholder, texto, name, handleOnChange, value }) => {

  /* Dados que posso passar dinamicamente: type, text, name, placeholder, handleOnChange, value */

  return (
    <>
      <label htmlFor={name} className={styles.label} >{texto}</label>

      <input
        id={name}
        name={name}
        className={styles.textInput}
        type={type}
        placeholder={placeholder}
        OnChange={handleOnChange}
        value={value} />
    </>
  );
};