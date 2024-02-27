import { useState } from 'react'
import './App.css'
import Car from './Components/Car';
import Garage from './Components/Garage';
import Events from './Components/Events';
import Phone from './Components/Phone';


const carinfo = {name: "Ford", model: "Mustang"};

function App() {

  return (
    <>
<Car carinfo={carinfo}/>
<Events />
<Phone />
    </>
  )
}

export default App
