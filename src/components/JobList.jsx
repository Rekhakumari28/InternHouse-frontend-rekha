import React from 'react'

export default function JobList() {
  return (
    <div className='row'>
        <div className='col-md-4 my-2'>
          <div className='card p-2'>
            <div className='card-body '>
                <h3>job name</h3>
                <p><strong>Company</strong></p>
                <p><strong>Location</strong></p>
                <p><strong>Job-Type</strong></p>               
                <span><button className='btn btn-primary my-1 px-4'>See Details</button></span>
                <span><button className='btn btn-danger my-1 ms-1 px-5' >Delete</button></span>               
            </div>
          </div>
            </div>      
    </div>
  )
}
