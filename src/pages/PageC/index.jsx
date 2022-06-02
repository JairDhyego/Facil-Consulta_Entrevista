import styles from "../PageC/Page.module.css";
import { Link } from "react-router-dom";
import ImgPrincipalTres from "../../img/desktop3.png";

import { Label } from "./../../shared/components/Label/index";
import { Title } from "./../../shared/components/Title";
import { useContext } from "react";
import { UserContext } from "../../shared/contexts";
import { BackButton } from './../../shared/components/BackButton/index';

export const PageC = () => {
  const {formData} =
    useContext(UserContext);

  return (
    <main>
      <BackButton />
      <Title titulo="Revisão de cadastro" />

      <div className={styles.containerTela3}>
        <div className={styles.InformacoesTela3}>
          <form className={styles.formulario}>
            <div className={styles.nome}>
              <Label texto="Nome completo" />
              <div className={styles.informacoesFinais}>
           
              </div>
            </div>

            <div className={styles.cpf}>
              <Label texto={formData.cpf} />
              <div></div>
            </div>

            <div className={styles.numeroDeContato}>
              <Label texto="Número de celular ou telefone" />
              <div className={styles.informacoesFinais}></div>
            </div>

            <div className={styles.localizacao}>
              <Label texto="Estado/Cidade" />
              <div className={styles.informacoesFinais}>
                 / 
              </div>
            </div>

            <div className={styles.especialidade}>
              <Label texto="Especialidade principal" />
              <div className={styles.informacoesFinais}></div>
            </div>

            <div className={styles.precoDaConsulta}>
              <Label texto="Preço da consulta" />
              <div className={styles.informacoesFinais}>R$ </div>
            </div>

            <div className={styles.FormasDePagamento}>
              <Label texto="Formas de pagamento da consulta" />
              <div className={styles.informacoesFinais}>  </div>
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
