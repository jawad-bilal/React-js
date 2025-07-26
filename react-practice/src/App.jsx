// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import Register from './components/Register';
import Test from './components/Test';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/test/:testId' element={<Test/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default App