import React, { useState } from 'react';

function Tweet({ tweet, onLike, onDelete }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleLikeClick = () => {
    setIsFavorited(!isFavorited);
    onLike(tweet.id);
  };

  const handleDeleteClick = () => {
    onDelete(tweet.id);
  };

  return (
    <li>
      <div>{tweet.content}</div>
      <button onClick={handleLikeClick}>
        {isFavorited ? 'Desmarcar como favorito' : 'Marcar como favorito'}
      </button>
      <button onClick={handleDeleteClick}>Eliminar</button>
    </li>
  );
}

export default Tweet;
