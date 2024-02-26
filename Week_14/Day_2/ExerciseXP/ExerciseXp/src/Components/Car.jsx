import React from 'react';
import car_info from '../App'

const Car = (props)=> {
    const {name, model} = props.carinfo
    return (
        <>
    <h2>Brand: {name}</h2>
    <p>Model: {model}</p>
    </>
    )
}

export default Car
