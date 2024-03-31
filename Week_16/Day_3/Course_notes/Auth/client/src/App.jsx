import { useState, createContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home.jsx';
import LoginRegister from './Components/LoginRegister.jsx';
import Auth from './auth/Auth.jsx';
import './App.css'


export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
// console.log(BASE_URL);

export const AuthContext = createContext();

function App() {
  const [token, setToken] = useState();
  return (
    <>
<AuthContext.Provider value={{token, setToken}}>
  <Routes>
    <Route path='/' element={<Auth><Home/></Auth>} />
    <Route path='/login' element={<LoginRegister page="Login"/>} />
    <Route path='/register' element={<LoginRegister page="Register"/>} />
  </Routes>
  
  </AuthContext.Provider>
    </>
  )
}

export default App
