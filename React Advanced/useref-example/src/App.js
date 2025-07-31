import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  const formInpuutRef = React.useRef(null);
  const focusInput = () => {
    formInpuutRef.current.focus(); //focus the input element (highlights it an puts cursor there)
  };

  return (
    <>
      <h1>useRef Example</h1>
      <input ref = {formInpuutRef} type="text" placeholder="Type something..." />
      <button onClick = {focusInput}>
        Focus Input
      </button>
    </>
  );
}

export default App;
