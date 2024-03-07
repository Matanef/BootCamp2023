import { useState } from "react"

const Quote = ({quotes})=>{
    // const [qoute, setQoute] = useState('')
    const [quoteIndex, setQuoteIndex] = useState(0)
    let newNumArray = [];

    const changequote =() =>{
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * quotes.length)
            console.log(newIndex);
        } while (newIndex === quoteIndex)
        setQuoteIndex(newIndex)
    }
    // const changeBackgroundColor = () =>{
    // }

    return (
        <>
        <div style={{border: '3px solid green', borderRadius:'5px', width: '550px', height: '250px', backgroundColor: 'purple', position: 'relative'}}> 
        <h3 style={{color: 'black'}}>"{quotes[quoteIndex].quote}"</h3>
        <h3>{quotes[quoteIndex].author}</h3>
        <button onClick={changequote} style={{ position: 'absolute' , right:15, backgroundColor: 'grey'}}>Generate</button>
        </div>
        
        </>
    )
}

export default Quote