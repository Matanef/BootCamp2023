import React, { useState } from 'react'
import ThemeSwitcher from './Components/ThemeSwitcher'
import {ThemeProvider} from './Components/ThemeContext'
import './App.css'


function App() {


  return (
    <>
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
