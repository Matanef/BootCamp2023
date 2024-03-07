import { useState, createContext } from 'react'
import './App.css'
import Action from './Components/Action'
import Display from './Components/Display'
import Testcontext from './Components/Testcontext'

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppContext.Provider value={{count, setCount}}>
    <Testcontext/>
    </AppContext.Provider>
      <Action count={count} setCount={setCount}/>
      <Display count={count}/>

    </>
  )
}

export default App
