import React from 'react' 
import{TiLocation} from 'react-icons/ti';
import{HiMail}from 'react-icons/hi';
import{SiFacebook} from 'react-icons/si';
import{Link} from 'react-router-dom';
import {SiInstagram} from 'react-icons/si';
import {BsTwitter} from 'react-icons/bs';
import{SiYoutube} from 'react-icons/si';
function Footer() {
  return (
    <div className=' footerdivision text-dark mt-10 mb-5 p-5 ' style = {{backgroundColor : "#808080 "}}> 
      <div className='d-flex justify-content-evenly container text-light  mt-5 mb-5 p-5'>
        <div className='foraddress text-left ' style = {{width : "30%"}}>
          <h3>Contact Us Today</h3>
          <h1>E-coders</h1>
          <div className='d-flex'>
          <Link to = 'https://www.google.com/maps/place/Ecoders/@13.054285,77.50702,15z/data=!4m6!3m5!1s0x3bae23460634f221:0x2a27c0c9577a1841!8m2!3d13.0542853!4d77.5070198!16s%2Fg%2F11fr3y_gqy?hl=en-US&entry=ttu' className= 'text-light'><TiLocation size={'2em'} className='m-2'/></Link>
          <p ><font size='+1'>#198, 1st main Road, Kirloskar Layout Sidedahalli, Hesarghatta Main Rd, Nagasandra, Bengaluru, Karnataka 560073</font></p>
         
          </div>
        
          <div className='d-flex'>
            <HiMail size={'2em'} className='m-2'/><br/>
             <p><font size='+2'>ecoders.in@gmail.com</font></p>
          </div>
          </div>
          <div className='websitelinks text-center' style = {{width : "30%"}}>
          <h3>Quick Links</h3> 
            <ul>
            <li className='list-group-item '> <font size='+2'><p><Link to      = "/"        className='text-light m-1'>     HOME      </Link></p></font></li> 
                  <li className='list-group-item'><font size='+2'><p><Link to  =  "/about"     className='text-light m-1'>    ABOUT     </Link></p></font></li> 
                  <li className='list-group-item'><font size='+2'><p><Link to  =  "/service"     className='text-light m-1'>  SERVICE   </Link></p></font></li> 
                  <li className='list-group-item'> <font size='+2'><p><Link to =  "/portfolio"    className='text-light m-1'> PORTFOLIO </Link></p></font></li> 
                  <li className='list-group-item'> <font size='+2'><p><Link to =  "/contact"   className='text-light m-1'>   CONTACT   </Link></p></font></li> 
            </ul>
            </div>
            <div className='socialmedia text-right' style = {{width : "30%"}}>
            <h3>Find us on</h3>
            <ul>
            <li className='list-group-item'> <Link to ="https://www.facebook.com" className='text-light m-1'><font size='+2'>                       <SiFacebook />   Facebook   </font> </Link></li>
            <li className='list-group-item'> <Link to="https://twitter.com/i/flow/login" className='text-light m-1'><font size='+2'>                <BsTwitter />    Twitter    </font></Link></li>
            <li className='list-group-item'> <Link to="https://www.instagram.com/" className='text-light m-1'><font size='+2'>                      <SiInstagram />  Instagram  </font> </Link></li>
            <li className='list-group-item'> <Link to="https://www.youtube.com/@gurupreethsingh8094" className='text-light m-2'><font size='+2'>    <SiYoutube />    Youtube    </font> </Link></li>
            </ul>   
        </div>
      </div>
      <p className='text-center  text-light p-5'> copyright &copy; All rights reserved Ecoders MEI College.</p>
    </div> 
  )
}

export default Footer;