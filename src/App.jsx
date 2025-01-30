import './App.css'
import Header from './components/Header'
import JobList from './components/JobList'
import useFetch from '../useFetch'
import { useState } from 'react'

function App() {
  const [searchTitle, setSearchTitle] = useState("")
  const {data, loading, error} = useFetch("https://intern-house-backend-rekha.vercel.app/jobs")

  //ternery operator
  const jobFilterByTitle = searchTitle === "" ? data : data?.filter(job=> job.jobTitle.toLowerCase().includes(searchTitle))

  return (
    <>  
     <Header/>
     <div className='container'>
     <input type="text" className='form-control my-2' placeholder='Search by job title' value={searchTitle} onChange={(event)=>setSearchTitle(event.target.value)} />
     <h1>All Jobs</h1>
     {loading && <p className='p-3 mb-2 bg-info-subtle text-info-emphasis'>Loading...</p> }
     {data && data?.length > 0 &&   <JobList data= {jobFilterByTitle} />}    
     {error && <p className='p-3 mb-2 bg-danger-subtle text-danger-emphasis'>{error}</p> }
     </div>
     
    </>
  )
}

export default App
