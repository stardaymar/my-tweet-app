import React from 'react';
import Tweet from './Tweet';

function TweetList({ tweets, onLikeClick, onDeleteClick }) {
  if (!tweets || tweets.length === 0) {
    return <p>Sin tweets.</p>;
  }

  return (
    <ul>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </ul>
  );
}

export default TweetList;
