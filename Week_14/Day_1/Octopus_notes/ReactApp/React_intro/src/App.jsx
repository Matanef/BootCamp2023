import React, { useState } from 'react'
import './App.css'
import Car from './Car'
import Actor from './Actor'
import FormActor from './FormActor'
import ButtonCount from './ButtonCount'
import FirstFunction from './FirstFunction'
import Sunrise from './Sunrise'
import ApiTest from './ApiTest'
import Car2 from './Car2'
import Sunrise2 from './Sunrise2'
import SearchCar from './SearchCar'

const carName = "Lightning McQueen"

const charactersJson = {
  "people": [
    {
      "id" : "1",
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
    },
    {
      "id" : "2",
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
    },
    {
      "id" : "3",
      "name": "R2-D2",
      "height": "96",
      "mass": "32",
      "hair_color": "n/a",
    }
  ]
}



const characters = JSON.parse(JSON.stringify(charactersJson));


const brand = "Ford"


const carColors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown"
]



function App() {
  const [chosenCars, setChosenCars] = useState([])
  const [nameChosenCar, setNameChosenCar] = useState("")

  const listCars = [
    {
      id : 1,
      name: "dodge d200",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id : 2,
      name: "hi 1200d",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id : 3,
      name: "datsun pl510",
      year: "1971-01-01",
      origin: "Japan"
    },
    {
      id : 4,
      name: "chevrolet vega 2300",
      year: "1971-01-01",
      origin: "USA"
    }
  ]

  const actors = [
    {
      id: 1,
      firstName: 'Tom',
      lastName: 'Hanks',
      image: 'https://example.com/tom_hanks.jpg'
    },
    {
      id: 2,
      firstName: 'Leonardo',
      lastName: 'DiCaprio',
      image: 'https://example.com/leonardo_dicaprio.jpg'
    },
    {
      id: 3,
      firstName: 'Meryl',
      lastName: 'Streep',
      image: 'https://example.com/meryl_streep.jpg'
    }
  ];

  const handleChange = (event) =>{
    const searchedCars = listCars.filter(car => car.brand.includes(event.target.value))
    setNameChosenCar(event.target.value)
    setChosenCars(searchedCars)
    console.log(chosenCars);
  }

  return (
    <>
    <div>
      {/* <SearchCar searchCar={nameChosenCar} handleChange={handleChange}/>
      <Car chosenCar={chosenCars} /> */}
      <Sunrise2/>
      <Car2 colors={carColors}/>
      <ApiTest />
      <Sunrise />
      <FirstFunction />
      <ButtonCount />
      <h1>in the App.jsx</h1>
      <h1>my name is {carName}</h1>
      {
        characters.people.map(item =>(
          <ul key={item.id}>
            <li>{item.name}</li>
            <li>{item.height}</li>
            <li>{item.hair_color}</li>
          </ul>
        ))
      }
      <Car carBrand={brand} name={carName}/>
      <Car cars={listCars}/>
      {/* <Actor actors={actors}/> */}
      <h1>List of Actors</h1>
      {actors.map(actor =>(
        <Actor key={actor.id} {...actor}/>
      ))}
      <FormActor />
      <Car colors={carColors}/>
    </div>
    </>
  )
}

export default App
