import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    name: '',
    description: '',
    color: '',
  };

  const [values, setValues] = useState(valoresIniciais);

  console.log('VALUES -> ', values);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, //key -> attribute | value -> argument
    });
    console.log('Key: ', key, 'Value: ', value);
  }

  function handlerState(eventInfo) {
    const { getAttribute, value } = eventInfo.target; //eventInfo.target.getAttribute, eventInfo.target.target
    setValue(getAttribute('name'), value);
  }

  function handleSubmit(eventInfo) {
    eventInfo.preventDefault();
    setCategorias([...categorias, values]);

    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da Categoria:
            <input
              type='text'
              name='name'
              value={values.name}
              onChange={handlerState}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              type='text'
              name='description'
              value={values.description}
              onChange={handlerState}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type='color'
              name='color'
              value={values.color}
              onChange={handlerState}
            />
          </label>
        </div>
        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.name}</li>;
        })}
      </ul>
      <Link to='/'>Go to homepage</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
