import React from 'react'
import {FaGitlab} from 'react-icons/fa';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
                <div className='text-light d-flex justify-content-between p-3' style = {{backgroundColor : "#273746 "}}>
        <div className='d-flex align-items-center'> 
            <h1><FaGitlab className='m-2'/>E-coders
           </h1> 
            
        
        </div>
            
        <div className='d-flex align-items-center'>
        <Link to='/'            className='text-light m-1'>HOME        </Link>
        <Link to='about'        className='text-light m-1'>ABOUT       </Link> 
        <Link to='service'      className='text-light m-1'>SERVICE     </Link>
        <Link to='portfolio'    className='text-light m-1'>PORTFOLIO   </Link>
        <Link to='allstudent'   className='text-light m-1'>ALL STUDENT</Link>
        <Link to='contact'      className='text-light m-1'>CONTACT     </Link>
        </div>
    </div>

  )
}
export default Navbar;