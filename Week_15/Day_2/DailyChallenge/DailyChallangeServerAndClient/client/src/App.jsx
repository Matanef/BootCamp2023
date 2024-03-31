import React, { useState, createContext, useRef } from "react";
import "./App.css";


export const AppContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  let name = 'John'
  const changeJohn = () =>{
    name= 'Dan';
    console.log("name=>", name);
  }
  return (
    <>
    <div>
      <h2>useRef</h2>
      <button onClick={() => setCount(count + 1)}> + {count}</button>
    </div>
    <div>
      <h2>{name}</h2>
      <button onClick={()=> changeJohn}>Change John</button>
    </div>
    </>
  )
}

export default App;


// function App() {
//   const [msg, setMsg] = useState('')

//   const getMsgFromServer = async() =>{
//     try{
//       const res = await fetch('');
//       const messege = await res.json();
//       setMsg(messege.messege);
//     }catch(error){
//       console.log(error);
//     }
//   }
// return(
//   <>
//   <div>
//     <h2>{msg}</h2>
//   </div>
//   </>
// )
// }