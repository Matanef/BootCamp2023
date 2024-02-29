import React, {useState, useEffect} from 'react';

const Color =()=> {
    const [favoriteColor, setFavoriteColor ] = useState('Red')

    useEffect(() =>{
        alert("useEffect reached")
        const timeoutId = setTimeout(() => {
            setFavoriteColor('Yellow')
        }, 4000);        
        }, []);

    const changeColor =() =>{
        setFavoriteColor('Blue')
    }

    return (
        <>
        <header>
            My Favorite Color is {favoriteColor}
        </header>
        <div>
        <button onClick={changeColor}>Change Color</button>
        </div>
        </>
        )
}


export default Color;