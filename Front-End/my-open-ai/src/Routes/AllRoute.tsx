import React from 'react'
import InterviewPage from '../Pages/InterviewPage'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={< HomePage/>}/>
        <Route path='/interview' element={<InterviewPage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoute
