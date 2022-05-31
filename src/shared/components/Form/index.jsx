import { Input } from './../Input/index';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './../../shared/Validation/index';


export const FormNew = (
  { type,
    placeholder,
    texto,
    name,
    handleOnChange,
    register,
    getValue,
    errors }
) => {



  const { register, handleSubmit, getValues, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  return (

    <form action="">

      <div>
        <Input name={name}
          type={type}
          id={name}
          placeholder={placeholder}
          texto={texto}
          register={register}
          getValue={getValue}
          handleOnChange={handleOnChange}
          errors={errors} />
      </div>

      <div>
        <Input name="nome"
          type={type}
          id={name}
          placeholder={placeholder}
          texto={texto}
          register={register}
          getValue={getValue}
          handleOnChange={handleOnChange}
          errors={errors} />
      </div>

      <div>
        <Input name="nome"
          type={type}
          id={name}
          placeholder={placeholder}
          texto={texto}
          register={register}
          getValue={getValue}
          handleOnChange={handleOnChange}
          errors={errors} />
      </div>

      <div>
        <Input
          type={type}
          getValue={getValue}
          handleOnChange={handleOnChange}
        />
      </div>


    </form>
  );
} 