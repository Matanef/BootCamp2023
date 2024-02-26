import React from 'react';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise from './Exercise3';


const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

console.log(user.favAnimals);

function App() {
  const helloWorldMsg = <p>Hello World</p>
  const myelement = <h1>I Love JSX!</h1>
  const sum = 5+5
  const summsg = <p>React is {sum} times better with JSX</p>
  const summsg2 = <p>React is {5+5} times better with JSX</p>
  const firstname = <h3>{user.firstName}</h3>
  const lastname = <h3>{user.lastName}</h3>
  return (
    <>
      <div>
        <Exercise/>
        {helloWorldMsg}
        {myelement}
        {summsg}
        {summsg2}
        {firstname}
        {lastname}
        <UserFavoriteAnimals favAnimals={user.favAnimals}/>
      </div>

    </>
  )
}

export default App
