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
    return <span> Valor errado</span>;
  };

  return (
    <main>
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
            <BackButton />

            <div className={styles.conjunto1}>
              <Select texto="Especialidade principal*" options={skil} />
            </div>

            <div className={styles.conjunto2}>
              <label htmlFor="preco" className={styles.label}>
                informe o preço da consulta
              </label>
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

            <ConjuntoEnvioDeForm
              contagem="2 de 2"
              min="50"
              max="100"
              caminho="/terceiraetapa"
            />
          </form>
        </div>

        <div className={styles.img}>
          <img src={ImgPrincipalDois} alt="Médico explicando" />
        </div>
      </div>
    </main>
  );
};
