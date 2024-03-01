import { useState } from 'react'
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
            Click here {count1}
            <p>{languages[0].name}</p>
          </button>
        </div>
        <div className='card2'>
          <button onClick={() => setCount2((count) => count + 1)}>
            Click Here {count2}
            <p>{languages[1].name}</p>
          </button>
        </div>
        <div className='card3'>
          <button onClick={() => setCount3((count) => count + 1)}>
            Click Here {count3}
            <p>{languages[2].name}</p>
          </button>
        </div>
        <div className='card4'>
          <button onClick={() => setCount4((count) => count + 1)}>
            Click Here {count4}
            <p>{languages[3].name}</p>
          </button>
        </div>
      </div>

    </>
  )
}

export default App
