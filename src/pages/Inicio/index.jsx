import styles from "./Inicio.module.css";
import ImgPrincipalUm from "../../img/desktop1.png";
import { Select } from "./../../shared/components/Select/index";
import { Subtitulo } from "./../../shared/components/Subtitulo/index";
import { Title } from "../../shared/components/Title";
import { ConjuntoEnvioDeForm } from "../../shared/components/ConjuntoEnvioDeForm/index";
import { BackButton } from "./../../shared/components/BackButton/index";

import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./../../shared/Validation/index";

import { useContext } from "react";
import { UserContext } from "../../shared/contexts";
import { Label } from "./../../shared/components/Label/index";
import { Link } from "react-router-dom";
import { Botaoproximo } from "./../../shared/components/Botaoproximo/index";

export const onSubmit = ({ nome, cpf, tel }) => {
  const data = { nome, cpf, tel };
  console.log(data);
};

export const Inicio = () => {
  const {
    estados,
    setEstados,
    city,
    setCity,
    stateSelected,
    setStateSelected,
    profissional,
    setProfissional,
  } = useContext(UserContext);

  async function loadStates() {
    let response = await fetch(
      "https://api-teste-front-end-fc.herokuapp.com/estados"
    );
    let data = await response.json();
    setEstados(data);
  }

  async function loadCitys() {
    let response = await fetch(
      `https://api-teste-front-end-fc.herokuapp.com/cidades?estadoId=${stateSelected}`
    );
    let data = await response.json();
    setCity(data);
  }

  async function loadProfissionais() {
    let response = await fetch(
      "https://api-teste-front-end-fc.herokuapp.com/profissionais"
    );
    let data = await response.json();
    setProfissional(data);
  }

  useEffect(() => {
    loadStates();
  }, []);

  useEffect(() => {
    loadCitys();
  }, [stateSelected]);

  useEffect(() => {
    loadProfissionais();
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <main>
      <BackButton />
      <Title titulo="Sobre o profissional" />

      <div className={styles.subtitulo}>
        <Subtitulo texto="Dados do profissional" />
      </div>

      <div className={styles.containerTela1}>
        <div className={styles.Informacoes1}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.formulario}>
            <div className={styles.nome}>
              <Label texto="Nome completo*" />
              <input
                id="name"
                className={styles.textInput}
                type="text"
                placeholder="Digite o nome completo"
                {...register("nome")}
              />
              {errors.nome && (
                <span className={styles.errorSPan}>Error message</span>
              )}
            </div>

            <div className={styles.cpf}>
              <Label texto="CPF*" />
              <input
                id="cpf"
                className={styles.textInput}
                type="text"
                placeholder="Digite um CPF"
                {...register("cpf")}
              />
              {errors.cpf && (
                <span className={styles.errorSPan}>Error message</span>
              )}

              {/* profissional && <span className={styles.errorSPan}> CPF já cadastrado.</span> */}
            </div>

            <div className={styles.tel}>
              <Label texto="Número de celular*" />
              <input
                id="tel"
                className={styles.textInput}
                type="tel"
                placeholder="(00) 0 0000-0000)"
                {...register("tel")}
              />
              {errors.tel && (
                <span className={styles.errorSPan}>Error message</span>
              )}
            </div>

            <div className={styles.localizacao}>
              <div className={styles.regiao}>
                <Select
                  texto="Estado*"
                  options={estados}
                  callbackSetState={setStateSelected}
                />
              </div>

              <div className={styles.regiao}>
                <Select texto="Cidade*" options={city} />
              </div>
            </div>

            <ConjuntoEnvioDeForm contagem="1 de 2" />

            <Botaoproximo to="/segundaetapa" proximo="Próximo" />
          </form>
        </div>

        <div className={styles.img}>
          <img src={ImgPrincipalUm} alt="Médico explicando" />
        </div>
      </div>
    </main>
  );
};
