import { useState } from 'react'
import './App.css'
import quotes from './Components/QuotesDatabase'
import Quote from './Components/Quote'

function App() {


  return (
    <>

<Quote quotes={quotes}/>

    </>
  )
}

export default App
