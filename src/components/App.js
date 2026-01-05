
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {
  const [name,setAp]=useState('')
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Enter your name:</p>
    <input
    type="text"
    value={name}
    onChange={(e)=>setAp(e.target.value)}
      />
      {name ? <p>Hello {name}!</p> : null}
    </div>
  )
}

export default App
