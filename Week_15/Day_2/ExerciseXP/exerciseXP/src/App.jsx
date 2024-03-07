import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Shop from './Components/Shop'
import { Routes, Route, Link } from 'react-router-dom'
import ErrorBoundary from './Components/ErrorBoundary.jsx'
import PostList from './Components/PostList.jsx'


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


    </>
  )
}

export default App
