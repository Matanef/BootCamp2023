import React, {useState} from 'react';

const Events = () =>{
    const clickMe = () =>{
        alert ('i was clicked')
    }

    const [isToggleOn, setIsToggleOn] = useState(true);
    const [message, setMessage] = useState('');

    const handleToggle = () =>{
        setIsToggleOn(prevState => !prevState)
    }

    //input data
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
        <button onClick={handleToggle}>{isToggleOn ? 'ON': 'Off'}</button>
        </>
        )
}

export default Events