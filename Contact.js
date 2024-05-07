import React from 'react'
import{HiMail}from 'react-icons/hi';
import{Link} from 'react-router-dom';
import{SiFacebook} from 'react-icons/si';
import footcont from '../image/footcont.jpg';
import telipho from '../image/telipho.jpg';
import {SiInstagram} from 'react-icons/si';
import {BsTwitter} from 'react-icons/bs';
import cntme from '../image/cntme.jpg';
function Contact() {
  return (
    <div>
         <div className='contactdivision p-5 mb-10'>
              <h3 className='text-center-underline mb-5 p-5'></h3>
              <div className='text-center-underline mt-5 mb-15 p-5'>
                <h1><font color='#FFFFFF'><font size='+10'><font face='Lucida'>CONTACT US</font></font></font></h1>
              </div>
         </div>

      <div className='text-center  p-3' style={{backgroundColor : '#FBFCFC' }}>
        <h1><font face="Monospaced"><font color='#070707 '>Contact Info :</font></font></h1>
        <p><font color='#070707 '>GET IN TOUCH WITH US</font></p>

        <div className='d-flex justify-content-evenly container text-center mt-3 mb-3 p-3'style={{backgroundColor : '#FBFCFC '}}>
        <img height='300' width='600' src={cntme}/>
          <div className='text-dark text-left m-3 p-3' >
              <h1 align='left'><HiMail className='m-2'/>Email: ecoders.in@gmail.com</h1>
              <div className=' d-flex justify-content-evenly container text-dark ' style = {{width : "50%"}}>
                  <ul>
                  <Link to="https://www.facebook.com" className='text-dark m-3'><font size='+3'>   <SiFacebook /></font> </Link>
                  <Link to="https://www.facebook.com" className='text-dark m-3'><font size='+3'>   <BsTwitter /></font></Link>
                  <Link to="https://www.facebook.com" className='text-dark m-3'><font size='+3'>   <SiInstagram/></font> </Link>
                  </ul>   
              </div>
              <div className=' d-flex justify-content-evenly container text-dark ' style = {{width : "80%"}}>
                <h5 align='left'><font size='+2'>Phone : 080-XXXXXXXXXX</font></h5>
              </div> 
          </div>
        </div>
        
      </div>
    <div className='againdivision  p-5  mb-10'>

         <h3 className='text-center <bs> p-5 mb-10'><font size="+10"><font face="Luminari "><font color='#FFFFFF'>" Your  positive  action<br/>combined  with  positive  thinking<br/>
          results  in  success ".</font></font></font></h3>
    </div> 
    </div>
  )
}

export default Contact;