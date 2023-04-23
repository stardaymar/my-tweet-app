import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TweetForm({ onSubmit }) {
  const [tweetText, setTweetText] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setTweetText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!tweetText.trim()) {
      setError('El campo de tweet no puede estar vacío');
      return;
    }

    const newTweet = {
      id: uuidv4(),
      text: tweetText.trim(),
    };
    onSubmit(newTweet);
    setTweetText('');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Escribe tu tweet aquí...'
        value={tweetText}
        onChange={handleChange}
      />
      <button type='submit'>Enviar</button>
      {error && <p className='error'>{error}</p>}
    </form>
  );
}

export default TweetForm;
