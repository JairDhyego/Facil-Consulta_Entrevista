
import styles from "./Inicio.module.css"

import ImgPrincipalUm from '../../img/desktop1.png';
import { Title } from './../../shared/components/Title/index';
import { ConjuntoBotao } from './../../shared/components/ConjuntoRanger/index';

import { useState, useEffect } from "react";





export const Inicio = () => {


  return (

    <div className={styles.container}>

      <main>

        {/* TEXTO */}

        <div className={styles.conteudos}>

          <Title titulo=" Sobre o Profissional" />


          <div className={styles.Informacoes}>

            <div className={styles.subtitulo}>
              <h3>  Dados do profissional </h3>
            </div>

            <form >

              <div className={styles.nome}>
                <label
                  htmlFor="especialidades" > Nome completo*</label>
                <input type="text" placeholder="Digite o nome completo" />
              </div>


              <div className={styles.cpf}>
                <label htmlFor="preco"> Cpf*</label>
                <input id="preco" type="text" placeholder="Digite um CPF" />
              </div>

              <div className={styles.tel}>
                <label htmlFor="tel">Numero de celular*</label>
                <input type="number" id="tel" placeholder="(00)0 0000 0000" />
              </div>


              <div className={styles.localizacao}>

                <div className={styles.estado}>
                  <label htmlFor="estado">Estado</label>
                  <select>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>

                <div className={styles.cidade}>
                  <label htmlFor="cidade">Cidade</label>
                  <select>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>


              </div>

            </form>

            <ConjuntoBotao contagem="1 de 2"  caminho="/segundaetapa" />

          </div>


        </div>

        {/* FOTO */}

        <div className={styles.img} >
          <img src={ImgPrincipalUm} alt="Médico explicando" />
        </div>
     


      </main>
    </div>
  );
};