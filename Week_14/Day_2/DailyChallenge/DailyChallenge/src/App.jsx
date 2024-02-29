import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaScript", votes: 0},
    {name: "Java", votes: 0}
  ])  


  return (
    <>

      <div className="card">
        <div className='card1'>
        <button onClick={() => setCount1((count) => count + 1)}>
          count is {count1}
        </button>
        </div>
        <div className='card2'>
        <button onClick={() => setCount2((count) => count + 1)}>
          count is {count2}
        </button>
        </div>
        <div className='card3'>
        <button onClick={() => setCount3((count) => count + 1)}>
          count is {count3}
        </button>
        </div>
        <div className='card4'>
        <button onClick={() => setCount4((count) => count + 1)}>
          count is {count4}
        </button>
        </div>
      </div>

    </>
  )
}

export default App
