import { useState } from 'react'
import './App.css'
import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise3 from './Exercise3';

function App() {
  const myelement = <p>I Love JSX!</p>;
  const sum = 5+5
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <>
      <p>Hello World</p>
      <h2>{myelement}</h2>
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals}/>
      <Exercise3 />
    </>
  )
}

export default App
