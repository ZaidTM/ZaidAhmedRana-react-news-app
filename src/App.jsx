import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Forgot, Home, Login, SignUp } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='forgot' element={<Forgot />} />
      </Routes>
    </>
  )
}

export default App
