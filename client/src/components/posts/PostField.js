import React from 'react';

export default ({input, label, meta}) => {
  const {touched , error, warning} = meta;
  return (
      <div>
        <label>{label}</label>
        <input {...input}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
  );
};
