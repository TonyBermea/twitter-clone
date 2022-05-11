import PropTypes from 'prop-types'
import './Avatar.css'

//This doesn’t display the image of the user. 
// Instead, it just renders the first letter of their username. 
// I need access to the Twitter developer api  to render the images
// but I didn't have enough time to work on that.
function Avatar({ name = '' }) {
  return <div className="avatar">{name.charAt(0)}</div>
}

Avatar.propTypes = {
  name: PropTypes.string,
}

export default Avatar