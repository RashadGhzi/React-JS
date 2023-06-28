import './App.css';
import Item from './Item';
import PropTypes from 'prop-types'
function App() {
  return (
    <>
      <Item name='GeekyShows' role='Programmer' /*mark=2000*/ />
    </>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  rol: PropTypes.string,
  mark: PropTypes.number.isRequired,
}

Item.defaultProps = {
  mark: 1000,
}

export default App;
