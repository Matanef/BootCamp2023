import React, { useState } from 'react'

import './App.css'
import BuggyCounter from './Components/BuggyCounter'
import ErrorBoundary from './Components/ErrorBoundary'





function App() {

  return (
    <>

      <ErrorBoundary>
        <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
        <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </>
  )
}

export default  App

