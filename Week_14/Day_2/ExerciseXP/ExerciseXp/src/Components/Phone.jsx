import React, {useState} from 'react';

const Phone = () =>{
    const [phoneInfo, setPhoneInfo] = useState(
        {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        });
        // console.log(phoneInfo);
        
        const changeColor  = () =>{
            setPhoneInfo(prevState => ({...prevState, color: 'Blue'}))
        }

        //prevState keep the previous values
        
    return (
        <>
        <h2>Phone Information</h2>
        <p>{phoneInfo.brand}</p>
        <p>{phoneInfo.model}</p>
        <p>{phoneInfo.color}</p>
        <p>{phoneInfo.year}</p>
        <h3>Sentence:</h3>
        <div  style={{border: '3px solid black'}}>
        <p>My phone is a {phoneInfo.brand} phone</p>
        <p>it is a {phoneInfo.color} {phoneInfo.model} from {phoneInfo.year}</p>
        </div>
        <button onClick={changeColor}>Switch Color</button>

        </>
        )

}

export default Phone