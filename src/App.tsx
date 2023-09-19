import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const test2 = 2;
  const test3 = 3;
  const test4 = 444444;
  const test4444 = 4444444;
  const test7 = 77777;
  const test6 = 66666;

  //esta é a main

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React MAIN</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <p className="read-the-docs">change on main</p>

      <p className="read-the-docs">new change on main</p>

      <h1>{test2}</h1>
      <h1>{test3}</h1>
      <h1>{test4}</h1>
      <h1>{test4444}</h1>
      <h1>{test7}</h1>
      <h1>{test6}</h1>
    </>
  );
}

export default App;
