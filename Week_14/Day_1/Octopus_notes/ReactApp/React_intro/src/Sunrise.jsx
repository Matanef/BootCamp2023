import React, {useState, useEffect} from "react";

const Sunrise = () =>{
    const [state, setState] = useState({
        country: 'Israel',
        city: 'Tel Aviv',
        hourSunrise: '',
        hourSunset: '',
      });

      //By using this Hook, you tell React that your component needs to do something after render.
    useEffect(()=>{
        fetch('https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818')
        .then((resp)=> resp.json())
        .then((resp) => setState((prevState) => ({...prevState, hourSunrise: resp.results.sunrise, hourSunset: resp.results.sunset,})))
        .catch((error) => console.log(error));
    },[])

    const {country, city, hourSunrise, hourSunset} = state
    return(
        <>
        <p>{country}</p>
        <p>{city}</p>
        <p>{hourSunrise}</p>
        <p>{hourSunset}</p>
        </>
    )
}

export default Sunrise