/* eslint-disable linebreak-style */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Menu/Button';
import FormField from '../../../components/FormFields';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({

  });

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        alert('video cadastrado com sucesso!');

        history.push('/');
      }}
      >
        <FormField
          label="Título de Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
