import { useState } from 'react'
import './App.css'
import Car from './Components/Car';
import Garage from './Components/Garage';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';


const carinfo = {name: "Ford", model: "Mustang"};

function App() {

  return (
    <>
<Car carinfo={carinfo}/>
<Events />
<Phone />
<Color />
    </>
  )
}

export default App
