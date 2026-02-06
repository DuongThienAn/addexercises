import { useReducer } from "react";

const initialState = {
  status: "idle",
  data: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { status: "loading", data: null };
    case "FETCH_SUCCESS":
      return { status: "success", data: action.payload };
    default:
      return state;
  }
}

function UseReducerFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = () => {
    dispatch({ type: "FETCH_START" });

    setTimeout(() => {
      dispatch({ type: "FETCH_SUCCESS", payload: "User list" });
    }, 1000);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch</button>
      <p>Status: {state.status}</p>
      <p>{state.data}</p>
    </div>
  );
}

export default UseReducerFetch;
