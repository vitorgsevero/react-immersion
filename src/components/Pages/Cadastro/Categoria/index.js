import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';

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

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';

    fetch(URL).then(async (serverResponse) => {
      const response = await serverResponse.json();
      setCategorias([
        ...response,
      ]);
    });
  }, []);




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
          type='textarea'
          name='description'
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label='Color'
          type='color'
          name='color'
          value={values.color}
          onChange={handleChange}
        />

        <Button>Add</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}


      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.name}`}>{categoria.name}</li>;
        })}
      </ul>
      <Link to='/'>Go to homepage</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
