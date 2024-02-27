import React, {useEffect} from 'react';

const Events = () =>{
    const clickMe = () =>{
        alert ('i was clicked')
    }
    const handleKeyDown = (event)=>{
        if(event.key ==='Enter')
        alert ('The enter Key was pressed, your input is')
    }
    return (
        <>
    <button onClick={clickMe}>
        Click Me
        </button><br></br>
        <form>
            <label>please enter a word</label><br></br>
            <input onKeyDown={handleKeyDown} ></input><br></br>
        </form>
        </>
        )
}

export default Events