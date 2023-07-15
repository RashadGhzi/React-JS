
import './App.css';
import UseEffectHooks from './component/UseEffectHooks'
import CustomHooks from './component/CustomHooks'

function App() {
  const hooks = CustomHooks()
  return (
    <>
      <UseEffectHooks />
      <div className="">Custom Hooks is below</div>
      <div>{hooks.count}</div>
      <button type='button' onClick={hooks.handleCount}>Increment Even digit</button>
    </>
  );
}

export default App;
