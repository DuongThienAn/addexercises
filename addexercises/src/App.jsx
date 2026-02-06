import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseStateS from "./hooksexercises/Bai1_useState/UseStateS";
import UseStateForm from "./hooksexercises/Bai1_useState/UseStateForm";
import UseEffectClock from "./hooksexercises/Bai2_useEffect/UseEffectClock";
import UseRefStopwatch from "./hooksexercises/Bai4_useRef/UseRefStopwatch";
import UseReducerFetch from "./hooksexercises/Bai3_useReducer/UseReducerFetch";
import UseMemoProducts from "./hooksexercises/Bai5_useMemo/UseMemoProducts";
import UseCallbackTodo from "./hooksexercises/Bai6_useCallback/UseCallbackTodo";
import FetchGet from "./fetch/fetchGet/FetchGet";
import FetchPost from "./fetch/fetchPost/FetchPost";
import FetchUpdate from "./fetch/fetchUpdate/FetchUpdate";
import FetchDelete from "./fetch/fetchDelete/FetchDelete";
function App() {
  return (
    // <>
    //   <div>
    //     <h2>Bài 1: useState</h2>
    //     <UseStateS />
    //   </div>
    //   <div>
    //     <UseStateForm />
    //   </div>
    // </>

    // Bai 2:
    // <>
    //   <UseEffectClock />
    // </>

    // Bai 3:
    // <>
    //   <UseReducerFetch />
    // </>

    // Bai 4:
    // <>
    //   <UseRefStopwatch />
    // </>

    // Bai 5:
    // <>
    //   <UseMemoProducts />
    // </>

    // Bai 6:
    // <>
    //   <UseCallbackTodo />
    // </>
    // Fetch CRUD
    <>
      {/* <FetchGet /> */}
      {/* <FetchPost /> */}
      {/* <FetchUpdate /> */}
      <FetchDelete />
    </>
  );
}

export default App;
