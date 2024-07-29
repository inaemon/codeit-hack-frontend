import React from 'react';
import './styles.css';

const FormField = ({ label, name }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" />
    </div>
  );
};

export default FormField;
