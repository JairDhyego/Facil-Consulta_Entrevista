import styles from "./Input.module.css"

export const Input = ({
  type,
  placeholder,
  texto,
  name,
  handleOnChange,
  register,
  getValue,
  errors }) => {
  /*   function toListen() {
      error ? setError(false) : setError(true)
    } */


  return (
    <>
      <label htmlFor={name} className={styles.label} >{texto}</label>

      <input
        id={name}
        name={name}
        className={styles.textInput}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        ref={register}
        getValue={getValue}
        errors={errors}
      />

    </>

  );
};

