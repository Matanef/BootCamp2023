import { useState } from 'react'
import './App.css'
import Car from './Components/Car';
import Garage from './Components/Garage';
import Events from './Components/Events';


const carinfo = {name: "Ford", model: "Mustang"};

function App() {

  return (
    <>
<Car carinfo={carinfo}/>
<Events />
    </>
  )
}

export default App
