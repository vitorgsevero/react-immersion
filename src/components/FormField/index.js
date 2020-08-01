import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Input = styled.input`
`;

function FormField({ name, type, label, value, onChange }) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea'
  const tag = isTextArea ? 'textarea' : 'input'
  // Receiving the props from Component @ index.js
  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        :
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
