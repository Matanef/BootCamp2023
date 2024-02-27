import { useState } from "react";


const Test = (props) => {

    //in the following const the structure inside the curly brackets is as follows:
    //     state  function that setting this state (setState)
    const [name, setName] = useState('John')
    const [users, setUsers] = useState([])

    const handleSubmit = () => {
    // setName('Dan')
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>{
        console.log(data);
        setUsers(data)
    })
    .catch((e)=>{
        console.log(e);
    })
    }
    return (
        <>
            <h2>I am a Function Component</h2>
            <h1>{name}</h1>
            <button onClick={handleSubmit}>Submit</button>
            {
               users.map((item) =>{
                return (<div>{item.email}</div>)
               }) 
            }
        </>
    );
};

export default Test

