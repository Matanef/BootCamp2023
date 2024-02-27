import React, { useState } from 'react';
import car_info from '../App'
import Garage from './Garage';

const Car = (props)=> {
    const color = useState('Red')

     
    const {name, model} = props.carinfo;
    
    return (
        <>
            <h1>Car information</h1>
            <h2>Brand: {name}</h2>
            <p>Model: {model}</p>
            <p>Color: {color}</p>
            <Garage size="small"/>
    </>
    );
}

export default Car;
