import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Products from './Components/Products'
import Product from './Components/Product'
import Menu from './Components/Menu'

// export const BASE_URL= process.env.VITE_APP_BASE_URL
// console.log(BASE_URL);

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL
console.log(BASE_URL);


function App() {

  return (
    <>
    <Menu/>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/:id' element={<Product/>}/>
    </Routes>
    </>
  );
}

export default App
