import "./App.css";
import { useReducer } from "react";
function App() {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INC") {
      return state + 1;
    }
    if (action.type === "DEC") {
      return state - 1;
    }
    if (action.type === 0) {
      return 0;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="item">
      <div className="count">{state}</div>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
        type="button"
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
        type="button"
      >
        DECREMENT
      </button>
      <button
        onClick={() => {
          dispatch({ type: 0 });
        }}
        type="button"
      >
        RESET
      </button>
    </div>
  );
}

export default App;
