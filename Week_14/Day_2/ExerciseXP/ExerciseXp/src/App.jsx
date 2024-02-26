import { useState } from 'react'
import './App.css'
import Car from './Components/Car';


const carinfo = {name: "Ford", model: "Mustang"};

function App() {

  return (
    <>
<Car carinfo={carinfo}/>
    </>
  )
}

export default App
