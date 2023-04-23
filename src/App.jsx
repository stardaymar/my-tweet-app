import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TweetList from './components/TweetList';

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const savedTweets = JSON.parse(localStorage.getItem('tweets'));
    if (savedTweets) {
      setTweets(savedTweets);
    }
  }, []);

  const handleAddTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };

  const handleDeleteTweet = (tweetId) => {
    setTweets((prevTweets) =>
      prevTweets.filter((tweet) => tweet.id !== tweetId)
    );
  };

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  return (
    <div>
      <Form onAddTweet={handleAddTweet} />
      <TweetList
        tweets={tweets}
        onLike={handleLikeTweet}
        onDelete={handleDeleteTweet}
      />
    </div>
  );
}

export default App;
