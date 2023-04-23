import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TweetList from './components/TweetList';
import TweetForm from './components/TweetForm';
import { v4 as uuidv4 } from 'uuid';

function saveTweetsToStorage(tweets) {
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

function App() {
  const [tweets, setTweets] = useState([]);

  function getTweetsFromStorage() {
    const tweets = localStorage.getItem('tweets');
    return tweets ? JSON.parse(tweets) : [];
  }

  useEffect(() => {
    const tweetsFromStorage = getTweetsFromStorage();
    setTweets(tweetsFromStorage);
  }, []);

  function handleTweetSubmit(tweetText) {
    const newTweet = {
      id: uuidv4(),
      text: tweetText,
      likes: 0,
    };

    setTweets((prevTweets) => [...prevTweets, newTweet]);
    saveTweetsToStorage([...tweets, newTweet]);
  }

  function handleTweetLike(tweetId) {
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        return {
          ...tweet,
          likes: tweet.likes + 1,
        };
      }
      return tweet;
    });

    setTweets(updatedTweets);
    saveTweetsToStorage(updatedTweets);
  }

  function handleTweetDelete(tweetId) {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId);

    setTweets(updatedTweets);
    saveTweetsToStorage(updatedTweets);
  }

  return (
    <div className='app'>
      <TweetForm onSubmit={handleTweetSubmit} />

      {tweets.length > 0 ? (
        <TweetList
          tweets={tweets}
          onLikeClick={handleTweetLike}
          onDeleteClick={handleTweetDelete}
        />
      ) : (
        <p>No hay tweets aún</p>
      )}
    </div>
  );
}

export default App;
