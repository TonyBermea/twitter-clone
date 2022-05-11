import moment from 'moment'
import PropTypes from 'prop-types' 
// I used this package for type checking 
// because I'm not confident enough to use Typescript, yet
import Avatar from './Avatar'
import './Tweet.css'

// This component consumes the Avatar component
function Tweet(props) {
  const { user, createdOn, children } = props

  return (
    <div className="tweet">
      <Avatar name={user} />
      <div>
        <div className="tweet-header">
          <span className="tweet-user">@{user}</span>·
          <span className="tweet-created-on">
            {moment(createdOn).fromNow()}
          </span>
        </div>
         {/* I used 'children' attribute to allow the component to specify the children for the element*/}
        <div className="tweet-content">{children}</div>
      </div>
    </div>
  )
}

Tweet.propTypes = {
  user: PropTypes.string,
  createdOn: PropTypes.string,
}

export default Tweet