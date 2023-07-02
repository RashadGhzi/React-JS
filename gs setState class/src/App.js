import PropTypes from 'prop-types'
import Evnt from "./component/Evnt"

function App() {
  return (
    <>
      <Evnt role='Software Engineer' />
    </>
  )
}

Evnt.propTypes = {
  // name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
}


export default App
