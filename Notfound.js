import React from 'react'
import {Link}from 'react-router-dom';
function Notfound() {
  return (
    <div className='text-center'>
      <h3 className='text-decoration-underline mb-5 p-5'>Not Found Page</h3>
        <h1 className='display-1 text-danger'>Oops..!</h1>
        <h1 className='text-decoration-underline  mt-10 mb-10 p-5'>404 Page not found</h1>
        <Link to="/" className="btn btn-sm btn-outline-dark">Back To Home Page</Link>
    </div>
   
  )
}

export default Notfound;