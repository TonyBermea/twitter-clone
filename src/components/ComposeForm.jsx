import PropTypes from 'prop-types'
// I used the hook useState
import { useState } from 'react'
import Avatar from './Avatar'
import './ComposeForm.css'

function ComposeForm({ onSubmit }) {
  // useState() returns an array of [getter, setter]
  //I set the initial value of editorValue to an empty string 
  const [editorValue, setEditorValue] = useState('')

  // this is the handler for the onChange event of the textarea 
  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value)
  }

  const handleSubmit = (e) => {
    // to avoid reloading
    e.preventDefault()
    // calls the onSubmit function with the latest textarea value
    onSubmit(editorValue)
    // reset the textarea content
    // in case the user wants to write another tweet
    setEditorValue('')
  }

  return (
    <form className="compose-form" onSubmit={handleSubmit}>
      <div className="compose-form-container">
        <Avatar />
        {/* onChange attribute of <textarea> is assigned to 
        the handleEditorValueChange function without calling it */}
        <textarea
          value={editorValue}
          onChange={handleEditorValueChange}
          className="compose-form-textarea"
          placeholder="What's happening?"
        />
      </div>
      <button className="compose-form-submit">Tweet</button>
    </form>
  )
}

ComposeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ComposeForm