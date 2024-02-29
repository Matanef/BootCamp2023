import User from './Components/User'
import './App.css'
import { useState, useEffect } from 'react'
import AppClass from './AppClass'

// Hooks - useState Hook

//fetch ->https://jsonplaceholder.typicode.com/users
function App() {
  // const [username, setUsername] = useState('John')
  const [users, setUsers] = useState([{username: 'No Users'}])

  


  useEffect(() =>{
  fetchUsers()
  }, []);


  const fetchUsers = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((resp) =>
      setUsers( resp )
    )
    .catch(function (error) {
        console.log(`We got the error ${error}`)
    });
  }

  
  return (
    <>
    <div>
      <input onChange={(e) => setUsername(e.target.value)}/>
    </div>
      {/* <User username={username}

      // num={1} 
      // yesno={true}
      // posts = {[1,2,3,"A", "B", "C"]}
      // handleClick={()=>alert('Hello')} 
       /> */}
             {
        users.map(item => {
          return(
            <User username={item.username}/>
          )})
      }
    </>
  )
}

export default App
