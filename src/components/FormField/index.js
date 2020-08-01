import React from 'react';

function FormField({ name, type, label, value, onChange }) {
  //Receiving the props from Component @ index.js
  return (
    <div>
      <label>
        {label}:
        <input type={type} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
}

export default FormField;
