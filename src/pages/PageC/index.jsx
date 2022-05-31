import styles from "../PageC/Page.module.css";
import { Link } from "react-router-dom";
import ImgPrincipalTres from "../../img/desktop3.png";

import { Label } from "./../../shared/components/Label/index";
import { Title } from "./../../shared/components/Title";
import { useContext } from 'react';
import { UserContext } from "../../shared/contexts";

export const PageC = () => {

  const {
    skil,    
    valorInserido,    
    estados,    
    city,    
    profissional,
      } = useContext(UserContext);


  return (
    <main>
      <Title titulo="Revisão de cadastro" />

      <div className={styles.containerTela3}>
        <div className={styles.InformacoesTela3}>
          <form className={styles.formulario}>
            <div className={styles.nome}>
              <Label texto="Nome completo" />
              <div className={styles.informacoesFinais}>Jair Dhyego Silva do Nascimento</div>
            </div>

            <div className={styles.cpf}>
              <Label texto="CPF" />
              <div>00000000000</div>
            </div>

            <div className={styles.numeroDeContato}>
              <Label texto="Número de celular ou telefone" />
              <div className={styles.informacoesFinais}> 84 992062216</div>
            </div>

            <div className={styles.localizacao}>
              <Label texto="Estado/Cidade" />
              <div className={styles.informacoesFinais}>
                {city} / {estados}
              </div>
            </div>

            <div className={styles.especialidade}>
              <Label texto="Especialidade principal" />
              <div className={styles.informacoesFinais}>{skil}</div>
            </div>

            <div className={styles.precoDaConsulta}>
              <Label texto="Preço da consulta" />
              <div className={styles.informacoesFinais}>R$ 250.00</div>
            </div>

            <div className={styles.FormasDePagamento}>
              <Label texto="Formas de pagamento da consulta" />
              <div className={styles.informacoesFinais}> Cartão </div>
            </div>

            <div className={styles.links}>
              <Link to="/cadastroconluido" className={styles.botaoDeCadastro}>
                
                Cadastrar profissional
              </Link>

              <Link to="/" className={styles.editarCadastro}>                
                Editar cadastro
              </Link>
            </div>
          </form>
        </div>

        <div className={styles.img}>
          <img src={ImgPrincipalTres} alt="Médico explicando" />
        </div>
      </div>
    </main>
  );
};
