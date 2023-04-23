import React, { useState } from 'react';

function Form() {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // agregar el tweet a la lista de tweets
  };

  const handleInputChange = (e) => {
    setTweet(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nuevo tweet:
        <input type='text' value={tweet} onChange={handleInputChange} />
      </label>
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default Form;
