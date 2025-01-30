import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import JobList from './components/JobList'

function App() {
 

  return (
    <>
     <Header/>
     <div className='container'>
     <input type="text" className='form-control my-2' placeholder='Search by job title'  />
     <h1>All Jobs</h1>
     <JobList/>
     </div>
     
    </>
  )
}

export default App
