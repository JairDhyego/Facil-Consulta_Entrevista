
import styles from "./Page.module.css"

import ImgPrincipalDois from '../../img/desktop2.png';
import { ConjuntoRanger } from './../../shared/components/ConjuntoRanger/index';
import { Input } from './../../shared/components/Input/index';
import { BackButton } from './../../shared/components/BackButton/index';
import { Subtitulo } from './../../shared/components/Subtitulo/index';
import { TitleContainer } from './../../shared/components/TitleContainer/index';
import { Label } from './../../shared/components/Label/index';
import { Select } from './../../shared/components/Select/index';



export const PageB = () => {




  return (


    <main>

      <TitleContainer titulo="Sobre o atendimento" />


      <div className={styles.containerTela2}>

        <div className={styles.InformacoesTela2}>


          <form className={styles.FormularioTela2} >

            <BackButton />


            <div className={styles.subtitulo}>
              <Subtitulo texto="Detalhes do atendimento" />
            </div>



            <div className={styles.conjunto1}>
              <Select texto="Especialidade principal*"/>
            </div>

            <div className={styles.conjunto2}>
              <Input texto="Informe o preço da consulta*" type="text" placeholder="Digite o nome completo" />
              <div className={styles.divDeControle}>
                <p>R$</p>
                <Input type="text" placeholder="Valor" />
              </div>
            </div>


            <div className={styles.conjunto3}>

              <Label texto="Formas de pagamento da consulta*" />


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


            <ConjuntoRanger contagem="2 de 2" min="50" max="100" caminho="/terceiraetapa" />

          </form>

        </div>




        <div className={styles.img} >
          <img src={ImgPrincipalDois} alt="Médico explicando" />
        </div>

      </div>

    </main>


  );
};