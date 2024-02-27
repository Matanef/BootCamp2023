import React, {useState} from 'react';

const Events = () =>{
    const clickMe = () =>{
        alert ('i was clicked')
    }

    const [message, setMessage] = useState('');

    const handleChange = event => {
        event.preventDefault()
        setMessage(event.target.value);
  
    //   console.log('value is:', event.target.value);
    };

    const handleKeyDown = (event)=>{
        
        if(event.key ==='Enter'){
        alert (`The enter Key was pressed, your input is: ${message}`)
        }
    }
    return (
        <>
    <button onClick={clickMe}>
        Click Me
        </button><br></br>
        <form>
            <label>please enter a word</label><br></br>
            <input onKeyDown={handleKeyDown} onChange={handleChange} value={message}></input><br></br>
        </form>
        </>
        )
}

export default Events