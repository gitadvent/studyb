import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import RWD from '../../pages/RWD'

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home apiPath="movie/now_playing"></Home>}></Route>
      <Route path="rwd" element={<RWD></RWD>}></Route>
    </Routes>
  )
}

export default AllRoutes