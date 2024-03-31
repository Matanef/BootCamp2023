import React, {useState, useEffect} from "react";

const ApiTest = () => {
    const [state, setState] = useState({
        name: "",
        height: "",
        gender: ""
    });
    
    useEffect(() => {
        const fetchData = async () =>{
            try {
                const resp = await fetch('https://swapi.dev/api/people/1/')
                const data = await resp.json();
                setState({
                    name: data.name, 
                    height: data.height,
                    gender: data.gender 
                });
             } catch (error) {
                console.log('error => ', error);
            }
        };

        fetchData();
    },[])

    const {name, height, gender} = state;

    const handleClick = async (e) =>{
        const randomNumber = Math.floor(Math.random() * 83)
        console.log(randomNumber);
        if(randomNumber<82 && randomNumber>0){
        try {
            const resp = await fetch(`https://swapi.dev/api/people/${randomNumber}/`)
            const data = await resp.json();
            setState({
                name: data.name, 
                height: data.height,
                gender: data.gender 
            });
         } catch (error) {
            console.log('error => ', error);
        }
        }
    }
    
    return(
        <>
        <p>Name: {name}</p>
        <p>Height: {height}</p>
        <p>Gender: {gender}</p>
        <button onClick={handleClick}>Click to Switch Characters</button>
        </>
    )
}

export default ApiTest