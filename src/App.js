import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  // creating state
  // We can create many variables in a function
  let [count , setCount] = useState(1);
  let [isMorning, setMorning] = useState(true)


  return (
    // ?: is a ternary operator
    // `` backtick is used to concatenate, $ is used to append ,here we are appending nightDark class with other
    
    //<div className={isMorning ? 'dayLight' : 'nightDark'}>
    <div className={`nightDark  ${isMorning ? 'dayLight' : ''}`}>

      <h1>Time is : {isMorning ? 'Morning' : 'Night'}</h1>
      <h1>The value of counter is : {count} </h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
      <button onClick={()=> setMorning(!isMorning)}>Update time</button>
    </div>
  );


}

export default App;
