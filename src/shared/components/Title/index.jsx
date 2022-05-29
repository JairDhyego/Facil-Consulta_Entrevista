import styles from "../Title/Title.module.css"

/* import { CounterContext } from "../../contexts/CounterContext"
 import { useContext } from "react"
   const { titulo} = useContext(CounterContext); */

export const Title = ({ titulo }) => {



  return (
    <h1 className={styles.title}> {titulo} </h1>

  )
}


/* { titulo } 

{titulo} */