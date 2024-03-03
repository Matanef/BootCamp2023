import React from 'react';
import Sunrise from "./Components/Sunrise";
import SearchCar from "./Components/SearchCar";

const App = () => {

  const listCars = [
    {
      id: 1,
      brand: "ford",
      name: "ford torino",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id: 2,
      brand: "ford",
      name: "ford galaxie 500",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id: 3,
      brand: "chevrolet",
      name: "chevrolet vega 2300",
      year: "1971-01-01",
      origin: "USA"
    },
    {
      id: 4,
      brand: "peugeot",
      name: "peugeot 504 (sw)",
      year: "1972-01-01",
      origin: "Europe"
    },
    {
      id: 5,
      brand: "renault",
      name: "renault 12 (sw)",
      year: "1972-01-01",
      origin: "Europe"
    },
  ]

    let nameChosenCar;

    //callback function
    const handleChange = event => {
        nameChosenCar = event.target.value;
    };
  return (
    <div>
      <Sunrise />
      <div className="box">
            {/* We call the SearchCar component and we pass the props*/}
          <SearchCar listCars={listCars} handleChange={handleChange} />
        </div>
    </div>
  )
}

export default App;