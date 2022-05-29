
import styles from "../PageC/Page.module.css"
import { Link } from "react-router-dom"
import ImgPrincipalTres from '../../img/desktop3.png';

import { Label } from './../../shared/components/Label/index';
import { TitleContainer } from './../../shared/components/TitleContainer/index';


export const PageC = () => {



  return (

    <main>

      <TitleContainer titulo="Revisão de cadastro" />


      <div className={styles.containerTela3}>

        <div className={styles.InformacoesTela3}>

          <form className={styles.formularioFinal} >

            <div className={styles.nome}>
              <Label texto="Nome completo" />
              <div className={styles.informacoesFinais} >xxxx</div>
            </div>


            <div className={styles.cpf}>
              <Label texto="CPF" />
              <div>xxxx</div>
            </div>


            <div className={styles.numeroDeContato}>
              <Label texto="Número de celular ou telefone" />
              <div className={styles.informacoesFinais} >xxxx</div>
            </div>

            <div className={styles.localizacao}>
              <Label texto="Estado/Cidade" />
              <div className={styles.informacoesFinais} >xxxx</div>
            </div>


            <div className={styles.especialidade}>
              <Label texto="Especialidade principal" />
              <div className={styles.informacoesFinais} >xxxx</div>
            </div>

            <div className={styles.precoDaConsulta}>
              <Label texto="Preço da consulta" />
              <div className={styles.informacoesFinais} >R$ 200.00</div>
            </div>


            <div className={styles.FormasDePagamento}>
              <Label texto="Formas de pagamento da consulta" />
              <div className={styles.informacoesFinais} >xxxx</div>
            </div>


            <div className={styles.links}>

              <Link to="/cadastroconluido" className={styles.botaoDeCadastro} > Cadastrar profissional </Link>

              <Link to="/" className={styles.editarCadastro}  > Editar cadastro </Link>

            </div>
          </form>
        </div>

        <div className={styles.img} >
          <img src={ImgPrincipalTres} alt="Médico explicando" />
        </div >

      </div >



    </main >


  );
};