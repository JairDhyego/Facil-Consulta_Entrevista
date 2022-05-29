import styles from "./Imagem.module.css"


export const Imagem = ({src}) => {


  return (


    <div className={styles.img} >
      <img src={ImgPrincipalUm} alt="Médico explicando" />
    </div>


  );
}