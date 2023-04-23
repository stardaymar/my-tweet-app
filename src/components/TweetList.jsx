import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TweetList from './components/TweetList';
import {
  getTweetsFromLocalStorage,
  saveTweetsToLocalStorage,
} from './utils/localStorage';

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const tweetsFromLocalStorage = getTweetsFromLocalStorage();

    if (tweetsFromLocalStorage.length > 0) {
      setTweets(tweetsFromLocalStorage);
    }
  }, []);

  const handleAddTweet = (newTweet) => {
    const updatedTweets = [...tweets, newTweet];

    setTweets(updatedTweets);
    saveTweetsToLocalStorage(updatedTweets);
  };

  const handleDeleteTweet = (tweetId) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId);

    setTweets(updatedTweets);
    saveTweetsToLocalStorage(updatedTweets);
  };

  return (
    <div>
      <h1>My Tweet App</h1>
      <Form onAddTweet={handleAddTweet} />
      <TweetList tweets={tweets} onDeleteTweet={handleDeleteTweet} />
    </div>
  );
}

export default App;
