import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='navbar navbar-expand-lg bg-primary  p-3' data-bs-theme="dark">
      <div className='container'>
        <Link className='navbar-brand'>Intern House</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link className="nav-link" to="/">Job Posting</Link>
            </li>
            <li className='nav-item'>
                <Link className="nav-link" to="/postAJob">Post a Job</Link>
            </li>
        </ul>
    </div>
      </div>
    </div>
  )
}
