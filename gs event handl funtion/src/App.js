import Evnt from "./component/Evnt"
import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <Evnt name='Sonam' role='Software Engineer' />
    </>
  )
}

Evnt.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
}


export default App
