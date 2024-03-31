import React, { useState, useEffect } from 'react';

const Sunrise2 = () =>{
    const [city, setCity] = useState('Tel Aviv')
    const [lat, setLat] = useState(32.0853)
    const [lng, setLng] = useState(34.7818)
    const [hourOfSunrise, setHourOfSunrise] = useState('')

    const changeCity =(event) =>{
        const CityName = event.target.name
        if(CityName == 'new york'){
            setCity('New York');
            setLat(40.730610)
            setLng(-73.935242)
        }else if(CityName == 'paris') {
            setCity('Paris');
            setLat(48.864716)
            setLng(2.349014)
        }
    }

    useEffect(()=>{
        const paragraph = document.getElementsByClassName('description')[0]
        fetch('https://api.sunrise-sunset.org/json?lat=' + lat + "&lng="+ lng)
        .then((resp)=> resp.json())
        .then(function (resp) {
            setHourOfSunrise(resp.results.sunrise)
            return resp.results.sunrise
        })
        .then(function (results) {
            if(hourOfSunrise == results){
                paragraph.innerText= `the Hour of Sunrise in ${city} is ${hourOfSunrise}`
            }
        })
        .catch(function (error) {
            console.log("we have an error ==>", error);
        })
    })
    return (
        <>
        <p className='description'>this is a Function of Sunrise</p>
        <button onClick={changeCity} name="new york">Change City to New York</button>
        <button onClick={changeCity} name="paris">Change City to Paris</button>
        </>
    )
}

export default Sunrise2