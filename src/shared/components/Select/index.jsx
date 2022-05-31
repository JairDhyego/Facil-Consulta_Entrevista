import { Label } from './../Label/index';
import styles from "./Select.module.css"

export const Select = ({ texto, options, callbackSetState }) => {



  function setIdState(e) {
     callbackSetState ? callbackSetState(e.target.value) :  callbackSetState
    
  };



  return (

    <div className={styles.regiao}>
      <Label texto={texto}  />
      <select onChange={(e) => { setIdState(e) }}  >
        <option  selected value="">Escolha</option>
        {options && options.map((option) => (
          <option value={option.id} key={option.id}>{option.nome}</option>
        )
        )}


      </select>
    </div>

  );

}


