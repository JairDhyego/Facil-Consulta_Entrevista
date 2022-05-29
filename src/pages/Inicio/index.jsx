import styles from './Inicio.module.css';


import ImgPrincipalUm from "../../img/desktop1.png"

import { ConjuntoRanger } from '../../shared/components/ConjuntoRanger/';
import { Input } from './../../shared/components/Input/index';
import { Subtitulo } from './../../shared/components/Subtitulo/index';
import { TitleContainer } from '../../shared/components/TitleContainer';
import { Select } from './../../shared/components/Select/index';

import { useState, useEffect } from "react"



export const Inicio = () => {



  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [tel, setTel] = useState("");

  const [estados, setEstados] = useState([]);
  const [city, setCity] = useState([]);

  const [stateSelected, setStateSelected] = useState("");


  async function loadStates() {
    let response = await fetch("https://api-teste-front-end-fc.herokuapp.com/estados");
    let data = await response.json();
    setEstados(data)
  }


  async function loadCitys() {
    let response = await fetch(`https://api-teste-front-end-fc.herokuapp.com/cidades?estadoId=${stateSelected}`);
    let data = await response.json();
    setCity(data)
  }

  useEffect(() => {
    loadStates()
  }, [])


  useEffect(() => {

    loadCitys()

  }, [stateSelected]
  )



  return (

    <main>

      <TitleContainer titulo="Sobre o profissional" />

      <div className={styles.containerTela1}>
        <div className={styles.Informacoes1}>
          <div className={styles.subtitulo}>
            <Subtitulo texto="Dados do profissional" />
          </div>

          <form >
            <div className={styles.nome}>
              <Input texto="Nome completo*" type="text" placeholder="Digite o nome completo" />
            </div>

            <div className={styles.cpf}>
              <Input texto="CPF*" type="text" placeholder="Digite um CPF" />
            </div>

            <div className={styles.tel}>
              <Input texto="Numero do celular" type="number" placeholder="(00) 0 0000-0000" />
            </div>


            <div className={styles.localizacao}>
              <Select texto="estado" options={estados} callbackSetState={setStateSelected} />
              <Select texto="cidade" options={city} />
            </div>
            <ConjuntoRanger contagem="1 de 2" min="0" max="50" caminho="/segundaetapa" />
          </form>
        </div>

        <div className={styles.img} >
          <img src={ImgPrincipalUm} alt="Médico explicando" />
        </div>

      </div>
    </main>

  );
};