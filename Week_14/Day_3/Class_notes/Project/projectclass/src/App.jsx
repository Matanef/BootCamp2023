import User from './Components/User'
import './App.css'
import { useState, useEffect } from 'react'
import AppClass from './AppClass'

// Hooks - useState Hook

//fetch ->https://jsonplaceholder.typicode.com/users
function App() {


  const [firstname, setFirstname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname);
  };

  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        First Name:
        <input
          name='firstname'
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br></br>
        <input type='submit' value={"Submit"} />
      </form>
    </>
  );
}

export default App


/** Ziv's code
 * const [firstname, setFirstname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname);
  };

  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        First Name:
        <input
          name='firstname'
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br></br>
        <input type='submit' value={"Submit"} />
      </form>
    </>
 */


    /** my Code */

    // const [firstname, setFirstName] = useState('')
    // const handleSubmit = (e)=>{
    //   e.preventDefault();
    //   console.log(firstname);
    // }
  
    // return (
    //   <>
    //   <h2>Forms</h2>
    //   <form onSubmit={handleSubmit}>
    //     First name: <input name='firstname' onChange={(e) => setFirstName(e.target.value)}/><br></br>
    //     <input type='Submit' value={'Submit'}/><br></br>
    //   </form>
    //   </>
    // )