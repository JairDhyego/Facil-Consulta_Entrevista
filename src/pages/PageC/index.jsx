
import styles from "../PageC/Page.module.css"
import { Link } from "react-router-dom"
import ImgPrincipalTres from '../../img/desktop3.png';

/* import ImgSetaLeft from "../../img/leftarrow.png" */
import { Title } from './../../shared/components/Title/index';
import { Botaoproximo } from './../../shared/components/Botaoproximo/index';





export const PageC = () => {
  return (

    <div className={styles.container}>

     
      <main>

        {/* Lado Esquerdo */}

        <div className={styles.conteudos}>

        <Title titulo=" Revisão de cadastro " />


          <div className={styles.Informacoes}>

            <form className={styles.formularioFinal} >

              <div className={styles.nome}>
                <label> Nome completo</label>
                <div>xxxx</div>
              </div>


              <div className={styles.cpf}>
                <label > CPF</label>
                <div>xxxx</div>
              </div>


              <div className={styles.numeroDeContato}>
                <label >Número de celular ou telefone</label>
                <div>xxxx</div>
              </div>

              <div className={styles.localizacao}>
                <label> Estado/Cidade</label>
                <div>xxxx</div>
              </div>


              <div className={styles.especialidade}>
                <label >Cardiologia</label>
                <div>xxxx</div>
              </div>

              <div className={styles.precoDaConsulta}>
                <label > Preço da consulta</label>
                <div>R$ 200.00</div>
              </div>


              <div className={styles.FormasDePagamento}>
                <label > Formas de pagamento da consulta</label>
                <div>xxxx</div>
              </div>


              <div className={styles.links}>

                <Link to="/cadastroconluido" className={styles.botaoDeCadastro} > Cadastrar profissional </Link>
                
                <Botaoproximo proximo="Editar cadastro" style={"background=none"} caminho="/terceiraetapa" />
              </div>


            </form>


          </div>

        </div >

        {/* Lado direito */}


        <div className={styles.img} >
          <img src={ImgPrincipalTres} alt="Médico explicando" />

        </div >


      </main >

    </div >


  );
};