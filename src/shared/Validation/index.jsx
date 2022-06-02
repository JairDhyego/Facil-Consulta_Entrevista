import * as yup from "yup";

export const schema = yup
  .object({
    nome: yup.string().min(3).max(48).required("Error message"),
    cpf: yup.number().required("Error message"),
    tel: yup.number().min(11).required("Error message"),
  })
  .required();

export const schema2 = yup
  .object({
    valor: yup.number()
  })
  .required();
