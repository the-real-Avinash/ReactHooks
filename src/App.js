import "./App.css";
import React, { useState } from "react";

const App = () => {
  let [count,setCount] = useState('0');

  const incrementNumber = () => {
    console.log(count);
    setCount(count++);
    
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button className="btn" onClick={incrementNumber}>
        Increment
      </button>
    </div>
  );
}

export default App;
