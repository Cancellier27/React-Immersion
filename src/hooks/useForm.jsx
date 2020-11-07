/* eslint-disable linebreak-style */
import { useState } from 'react';

export default function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    return setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}
