import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, //key -> attribute | value -> argument
    });
  }

  function handleChange(eventInfo) {
    const { getAttribute, value } = eventInfo.target; //eventInfo.target.getAttribute, eventInfo.target.target
    console.log('Attribute: ', getAttribute, ' Value: ', value);
    setValue(eventInfo.target.getAttribute('name'), eventInfo.targetvalue);
  }

  function handleSubmit(eventInfo) {
    eventInfo.preventDefault();
    setCategorias([...categorias, values]);

    setValues(initialValues);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name} </h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label='Category Name'
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label='Description'
          type='text'
          name='description'
          value={values.description}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Description:
            <textarea
              label='Description'
              type='text'
              name='description'
              value={values.description}
              onChange={handleChange}
            />
          </label>
        </div> */}
        <FormField
          label='Color'
          type='color'
          name='color'
          value={values.color}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type='color'
              name='color'
              value={values.color}
              onChange={handleChange}
            />
          </label>
        </div> */}
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
