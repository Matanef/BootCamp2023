import React, {useState, useEffect} from 'react';

const Color =()=> {
    const [favoriteColor, setFavoriteColor ] = useState('Red')

    return (
        <header>
            My Favorite Color is {favoriteColor}
        </header>
        )
}


export default Color;