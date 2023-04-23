import React, { useState } from 'react';

function Form({ onAddTweet }) {
  const [tweetText, setTweetText] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setTweetText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (tweetText.length > 280) {
      setError('El tweet no debe exceder los 280 caracteres');
      return;
    }

    const newTweet = {
      id: new Date().getTime(),
      text: tweetText,
      favorite: false,
    };

    onAddTweet(newTweet);
    setTweetText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='tweetText'>Escribe tu tweet:</label>
      <textarea
        id='tweetText'
        value={tweetText}
        onChange={handleChange}
      ></textarea>
      {error && <div className='error'>{error}</div>}
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default Form;
