import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Result from './assets/pages/Result'
export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
    </Routes>
  );
}
