import React, { useState, createContext } from "react";
import "./App.css";
import Messege from "./Messege";
import InputMessege from "./InputMessege";


export const AppContext = createContext()

function App() {
  const [msg, setMsg] = useState("Hello John")
  return (
    <>
    <div>
      <h2>useSontext Hook</h2>
      <input onChange={(e) => setMsg(e.target.value)}></input>
      <AppContext.Provider value={{msg, setMsg}}>
      <Messege />
      </AppContext.Provider>
      
    </div>
    </>
  )
}

export default App;