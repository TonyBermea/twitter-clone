import { useState } from 'react'
import { nanoid } from 'nanoid'
import ComposeForm from './ComposeForm'
import Timeline from './Timeline'
import { FaTwitter } from 'react-icons/fa'
import './App.css'

import initialTweets from '../tweets.json'

// to store the current user name
const CURRENT_USER = 'TonyB'

function App() {
//stores the tweets in the state of the component
  const [tweets, setTweets] = useState(initialTweets);
  const [favorites, setFavorites] = useState([]);

// handler for new tweets
  const handlePostTweet = (content) => {
    const newTweet = {
      content,
      id: nanoid(),
      created_on: Date(Date.now()),
      user: CURRENT_USER,
      comments_count: 0,
      retweets_count: 0,
      favorites_count: 0,
    }
  // This generates a new array, with the contents of the existing tweets array
  // by appending the new tweet object
    setTweets([...tweets, newTweet]);
  }

  const handleToggleFavorite = (tweetId) => {
    const foundIndex = favorites.indexOf(tweetId);

    if (foundIndex > -1) {
      // Found, return a new array without this id
      setFavorites(favorites.filter((favoriteId) => favoriteId !== tweetId));
    } else {
      // Not found in favorites, return a new array including this id
      setFavorites([...favorites, tweetId]);
    }
  };

  return (
    <div className="app">
      <FaTwitter className="app-logo" size="2em" />
      <ComposeForm onSubmit={handlePostTweet} />
      <div className="separator"></div>
      <Timeline tweets={tweets} 
      onRetweet={handlePostTweet}
      favorites={favorites}
      onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App