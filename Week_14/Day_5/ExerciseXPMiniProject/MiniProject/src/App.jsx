import { useState } from 'react'
import './App.css'
import quotes from './Components/QuotesDatabase'
import Quote from './Components/Quote'

function App() {

  // const some = quotes.map(Math.floor(Math.random()))
  // console.log(some);
  // console.log(quotes[8].author);


  return (
    <>

<Quote quotes={quotes}/>

    </>
  )
}

export default App
