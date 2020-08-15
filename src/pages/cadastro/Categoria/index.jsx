/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormFields';
import Button from '../../../components/Menu/Button';
import Loading from './Loading';
import './categoria.css';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
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

  useEffect(() => {
    setTimeout(() => {
      const URL_TOP = 'http://localhost:8080/categorias';
      fetch(URL_TOP)
        .then(async (serverAnswer) => {
          const answer = await serverAnswer.json();
          setCategorias([
            ...answer,
          ]);
        });
    }, 3000);

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'front End',
    //       descricao: 'Uma categoria legal',
    //       cor: '#cdb1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Uma categoria Nao tao legal',
    //       cor: '#cdb1ff',
    //     },
    //   ]);
    // }, 2000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {` ${values.nome}`}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0 && <Loading />}

      <ul className="categoriesUlist">
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
