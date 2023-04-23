import React from 'react';

function Tweet({ tweet, onLikeClick, onDeleteClick }) {
  return (
    <li>
      <p>{tweet.text}</p>
      <button onClick={() => onLikeClick(tweet.id)}>Me gusta</button>
      <button onClick={() => onDeleteClick(tweet.id)}>Eliminar</button>
      <span>{tweet.likes} me gusta</span>
    </li>
  );
}

export default Tweet;
