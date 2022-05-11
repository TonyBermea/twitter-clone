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
  const [tweets, setTweets] = useState(initialTweets)
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
    setTweets([...tweets, newTweet])
  }

  return (
    <div className="app">
      <FaTwitter className="app-logo" size="2em" />
      <ComposeForm onSubmit={handlePostTweet} />
      <div className="separator"></div>
      <Timeline tweets={tweets} />
    </div>
  )
}

export default App