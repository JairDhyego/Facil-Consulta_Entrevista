import styles from "./Page.module.css";

import ImgPrincipalDois from "../../img/desktop2.png";
import { ConjuntoEnvioDeForm } from "./../../shared/components/ConjuntoEnvioDeForm/index";
import { BackButton } from "./../../shared/components/BackButton/index";
import { Label } from "./../../shared/components/Label/index";
import { Select } from "./../../shared/components/Select/index";
import { useEffect } from "react";
import { Title } from "./../../shared/components/Title";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../shared/contexts";
import { Subtitulo } from "./../../shared/components/Subtitulo/index";
import { Botaoproximo } from './../../shared/components/Botaoproximo/index';

const schema = yup
  .object({
    valor: yup.string().min().max().required("Error message"),
  })
  .required();

export const PageB = () => {
  const { skil, setSkil, valorInserido, setValorInserido } =
    useContext(UserContext);

  async function loadSkil() {
    let response = await fetch(
      "https://api-teste-front-end-fc.herokuapp.com/especialidades"
    );
    let data = await response.json();
    setSkil(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    loadSkil();
  }, []);

  const validarQuantia = () => {
    if (
      (valorInserido >= 30 && valorInserido <= 250) ||
      valorInserido === undefined
    ) {
      return;
    }
    return <span className={styles.errorSPan}> Valor errado</span>;
  };

  return (
    <main>
      <BackButton />
      <Title titulo="Sobre o atendimento" />

      <div className={styles.subtitulo}>
        <Subtitulo texto="Dados do profissional" />
      </div>

      <div className={styles.containerTela2}>
        <div className={styles.InformacoesTela2}>
          <form
            className={styles.FormularioTela2}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.conjunto1}>
              <Select texto="Especialidade principal*" options={skil} />
            </div>

            <div className={styles.conjunto2}>
              <Label texto="Informe o preço da consulta*" />
              <div className={styles.divDeControle}>
                <p>R$</p>
                <input
                  id="preco"
                  className={styles.textInput}
                  type="text"
                  placeholder="Valor"
                  {...register("valor")}
                  onChange={(e) => setValorInserido(e.target.value)}
                />
                {errors.valor && (
                  <span className={styles.errorSPan}>Error message</span>
                )}
                {validarQuantia()}
              </div>
            </div>

            <div className={styles.conjunto3}>
              <Label texto="Formas de pagamento da consulta*" />

              <div className={styles.formasDePagamento}>
                <div className={styles.forma1}>
                  <input type="checkbox" id="dinheiro" />
                  <Label texto="Em Dinheiro" />
                </div>

                <div className={styles.forma2}>
                  <input type="checkbox" id="pix" />
                  <Label texto="Pix" />
                </div>

                <div className={styles.forma3}>
                  <input type="checkbox" id="cartao" />
                  <Label texto="Cartão de crédito" />
                </div>
              </div>
            </div>

            <ConjuntoEnvioDeForm
              contagem="2 de 2"
              min={0}
              max={100}
              caminho="/terceiraetapa"
            />
            <Botaoproximo to="/segundaetapa" proximo="Próximo" />
          </form>
        </div>

        <div className={styles.img}>
          <img src={ImgPrincipalDois} alt="Médico explicando" />
        </div>
      </div>
    </main>
  );
};
