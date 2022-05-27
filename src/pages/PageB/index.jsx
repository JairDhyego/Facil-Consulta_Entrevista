
import styles from "../PageB/Page.module.css"
import { Link } from "react-router-dom"

import ImgPrincipalDois from '../../img/desktop2.png';
import { Title } from './../../shared/components/Title/';
import { ConjuntoBotao } from './../../shared/components/ConjuntoRanger/index';




export const PageB = () => {


  return (

    <div className={styles.container}>
      
   

      <main>

        {/* TEXTO */}

        <div className={styles.conteudos}>

        <Title titulo=" Sobre o atendimento" />


          <div className={styles.Informacoes}>

            <div className={styles.subtitulo}>

              <h3> <strong> Detalhes do atendimento</strong> </h3>
            </div>



            <form >

              <div className={styles.conjunto1}>
                <label
                  htmlFor="especialidades" > Especialidade Principal*</label>

                <select id="especialidades" >
                  <option selected  >Selecionar a Especialidade</option>
                  <option >1</option>
                  <option >2</option>
                  <option >3</option>
                </select>
              </div>

              <div className={styles.conjunto2}>
                <label htmlFor="preco"> Informe o preço da consulta*</label>
                <div>
                  <p>R$</p>
                  <input id="preco" type="text" placeholder="Valor" />
                </div>
              </div>


              <div className={styles.conjunto3}>

                <label >Formas de pagamento da consulta*</label>


                <div className={styles.formasDePagamento}>

                  <div className={styles.forma1}>
                    <input type="checkbox" id="dinheiro" />
                    <label htmlFor="dinheiro">Em dinheiro</label>
                  </div>

                  <div className={styles.forma2}>
                    <input type="checkbox" id="pix" />
                    <label htmlFor="pix">Pix</label>
                  </div>

                  <div className={styles.forma3}>
                    <input type="checkbox" id="cartao" />
                    <label htmlFor="cartao">Cartão de crédito</label>
                  </div>

                </div>

              </div>
            </form>

            <ConjuntoBotao contagem="2 de 2"  caminho="/terceiraetapa" />
          </div>

        </div>

        {/* FOTO */}


        <div className={styles.img} >
          <img src={ImgPrincipalDois} alt="Médico explicando" />

        </div>


      </main>

    </div>


  );
};