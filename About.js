import React from 'react'
import takecare from '../image/takecare.jpg';
import {TiTick} from 'react-icons/ti';
function About() {
  return (
    <div>
      <div className='aboutdivision p-5 mb-10'>
      <h3 className='text-center-underline mb-10 p-5'></h3>

      <div className='text-center-underline mb-10 p-5' >
      <h1><font size="+100"><font face="Monospaced"><font color='#FFFFFF'>About Us</font></font></font></h1>
      </div>
      </div>
      
      <div className='d-flex justify-content-evenly container text-dark  mt-10 mb-10 p-5' style={{backgroundColor : '#F4FCFC '}}>
        <img align='left' height='400' width='600'src={takecare}/>

        <div className='text-dark text-left  p-5' >
          <h1 align='left'><font size='+2'><font face='Lucida'></font></font>We take care of all<br/>
Your website needs</h1><br/>
          <p align='left'><font size='+1'><font face='Verdana'>We are a Bangalore based software development company.<br/>
           We have worked on many projects for entrepreneurs and<br/> businesses in and around our city. Our services
            have helped <br/>them grow their business exponentially by reaching <br/>the right targeted customers that 
            they are looking for.</font></font></p>
          <div className='text-left <b>' >
            <ul>
            <li className='list-group-item'><TiTick />      24/7 Tech Support</li>
            <li className='list-group-item'><TiTick />      Superfast Hosting Servers</li>
            <li className='list-group-item'><TiTick />      Unique Website Designs That Stand Out</li>
            </ul>
          </div>
        </div>
      </div>

     <div className='aboutagaindivision p-5 mb-10'>
       <h3 className='text-right-underline mt-10 mb-10 p-5'></h3>
        <div className=' bg-primary-subtle p-4 m-4 text-right text-dark' style={{width : '30%'}}>
            <h3 align='left'><font size='+5'><font face='Lucida'>OUR MISSION</font></font></h3>
            <p align='left <b>'><font size='+2'>The company’s main objective is to provide software support and innovative website ideas to help businesses reach their audience in a far more<br/>efficient way.</font></p>
        </div>
     </div>

     <div className='d-flex justify-content-evenly container text-dark mt-5 mb-5 p-5' style={{bakgroundColor :'#F4FCFC'}}>
          <h1><font size='+5'><font face='Lucida'>FOUNDED IN <br/>2019</font></font></h1>
          <p><font size='+2'>We are experts in UI designing and <br/>development. We do our best to <br/>
          develop the best User Interfaces for <br/>our customers.
          We also provide free <br/>technical support for one year after <br/>the product has been released to our <br/>customer.</font></p>
          <p><font color='#2E4053 <b>'><font size='+3'>10+ <br/>Project Finished</font></font></p>
          <p><font color='#2E4053 <b>'><font size='+3'>10+ <br/>Happy Clients</font></font></p>
        </div>




    </div>
    
  )
}

export default About;