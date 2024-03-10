import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Shop from './Components/Shop'
import { Routes, Route, Link } from 'react-router-dom'
import ErrorBoundary from './Components/ErrorBoundary.jsx'
import PostList from './Components/PostList.jsx'
import Example1 from './Components/Example1.jsx'
import Example2 from './Components/Example2.jsx'
import Example3 from './Components/Example3.jsx'


const fetchData = async () => {
  try {
    const url = 'https://webhook.site/42af505c-5b1d-42a2-aa7d-a9d36e1a8ac1';
    const dataToSend = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const resp = await fetch(proxyUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });

    if (!resp.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await resp.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error while fetching data:', error);
  }
}




function App() {


  return (
    <>
    <div>
      <nav>
        <ErrorBoundary>
        <Link to={'/'}>Home</Link>
        </ErrorBoundary>
        <ErrorBoundary>
        <Link to={'/profile'}>Profile</Link>
        </ErrorBoundary>
        <Link to={'/shop'}>Shop</Link>
        <ErrorBoundary>
        <Link to={'/posts.json'}>posts</Link>
        </ErrorBoundary>
      </nav>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/shop' element={<ErrorBoundary><Shop/></ErrorBoundary>}/>
      <Route path='*' element={<h2>404 Not Found</h2>}/>
      <Route path='/posts.json' element={<PostList/>}/>
      
    </Routes>
    <PostList />
    <Example1/>
    <Example2/>
    <Example3/>
    <div>
      <button onClick={fetchData}>Click to Post</button>
    </div>


    </>
  )
}

export default App
