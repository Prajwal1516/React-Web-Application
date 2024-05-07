import React from 'react'
import ecoder from '../image/ecoder.jpg';
import laptop from '../image/laptop.jpg';
import {MdDiamond} from 'react-icons/md';
import {TbTool} from 'react-icons/tb';
import {SiCircleci} from 'react-icons/si'
import that1 from '../image/that1.jpg';
import that2 from '../image/that2.jpg';
import that3 from '../image/that3.jpg';
import {Link} from 'react-router-dom';

function Home() {
  return (
<div className='homedivision'>
      <h3 className='text-center-underline mb-10 p-5'></h3>

    <div className='text-center' >
      <img src={ecoder}/>
      <h1><font size="+80"><font face="Monospaced">E-coders</font></font></h1>
      <p><font size="+2"><font color='#080808 '><font face="Impact <b>">SOFTWARE DEVELOPMENT COMPANY</font></font></font></p>
      <Link to="/portfolio" className="btn btn-sm btn-outline-light btn-dark mb-2 p-3 mt-2 "><font className="p-2" color="white" > OUR PROJECTS </font></Link>
      <Link to="/contact" className="btn btn-sm btn-light btn-outline-dark mb-2 p-3 ms-5 mt-2"><font className="p-3" > CONTACT  </font></Link>
    </div>
    <div className='text-dark mt-10 mb-10 p-5' style= {{backgroundColor : '#F4FCFC' }}>
      <img align='right'height='250' width='500' src={laptop}/>
      
      <div className='d-flex justify-content-evenly container text-left mb-10 p-5'>
      <h1><font size='+10'><font face='Lucida'>What are we..?</font></font></h1>
      
      <p align='left'><font size='+2'>We are a Bangalore based software development and training company.<br/> We develop websites, web applications, e-commerce sites and many other<br/>applications for businesses and entrepreneurs.<br/> We also provide digital marketing services as well as web hosting services.</font></p>
      </div>
    </div>
<div className='text-center mt-9 mb-9 p-4'style= {{backgroundColor : '#F4FCFC' }}>
    <h1><font size='+80'><font face='Lucida'><font color='#080808 '>What we offer...!</font></font></font></h1>
    <p><font color='#080808 '>AWESOME SERVICES</font></p>

    <div className='d-flex justify-content-evenly container  mt-3 mb-3 p-3' >

      <div className='text-center border bg-primary-subtle btn btn-sm btn-light btn-outline-dark p-3 m-3' style = {{width : "30%"}} >
        <h1 align='left'><MdDiamond size={'3em'}className='m-2'/><br/><font color='#030303'>
           Website Design And Development</font></h1>
        <p align='left'><font color='#030303'>We have a team of experts who specialise in creating unique and eye-catching website designs.</font></p>
      </div>
      <div className='text-center border bg-primary-subtle btn btn-sm btn-light btn-outline-dark p-3 m-3' style = {{width : "30%"}}>
        <h1 align='left'><TbTool size={'3em'} className='m-2'/><br/><font color='#030303'>Application Development</font></h1>
        <p align='left'><font color='#030303'>We also develop applications for various different types of needs such as e-commerce, data science, machine learning and so on.</font></p>
      </div>
      <div className='text-center border bg-primary-subtle btn btn-sm btn-light btn-outline-dark p-3 m-3' style = {{width : "30%"}}>
        <h1 align='left'><SiCircleci size={'3em'}className='m-2'/><br/><font color='#030303 '>Search Engine Optimisation</font></h1>
        <p align='left'><font color='#030303 '>We provide digital marketing services such as graphic design and Search Engine Optimisation (SEO)</font></p>
      </div>
    </div>
    <div className='d-flex justify-content-evenly container  mt-2 mb-2 p-2'>  
      <div className='text-center border bg-primary-subtle btn btn-sm btn-light btn-outline-dark p-3 m-3' style = {{width : "30%"}}>
        <h1 align='left'><MdDiamond size={'3em'}className='m-2'/><br/><font color='#030303 '>Website Maintenance</font></h1>
        <p align='left'><font color='#030303 '>Additionally, we provide 24/7 support to all our customers related to technical or non-technical queries. We also offer additional security services to make sure your applications/websites are fully secure from threats!</font></p>
      </div>
      <div className='text-center border bg-primary-subtle btn btn-sm btn-light btn-outline-dark p-3 m-3' style = {{width : "30%"}}>
        <h1 align='left'><TbTool size={'3em'} className='m-2'/><br/><font color='#030303'>E-Commerce Websites</font></h1>
        <p align='left'><font color='#030303 '>We can build professional looking e-commerce websites with payment gateways tailored to suit all your online-selling needs.</font></p>
      </div>
      <div className='text-center border bg-primary-subtle btn btn-sm btn-light btn-outline-dark p-3 m-3'style = {{width : "30%"}}>
        <h1 align='left'><SiCircleci size={'3em'}className='m-2'/><br/><font color='#030303'>Free Support</font></h1>
        <p align='left'><font color='#030303'>24/7 service and support to ensure you have no problem with any of our services</font></p>
      </div>
    </div>
    <div className='homedivisiontwo p-4 mb-10'>
      <h3 className='text-center-underline mt-9 mb-9 p-4'></h3>
      <div className=' bg-primary-subtle p-3 ms-3 m-3 text-left text-dark' style={{width : '50%'}}>
            <h3 align='left'><font size='+4'><font face='Lucida'>Get the best solutions from the industry leaders</font></font></h3>
            <p align='left'><font size='+2'>"The company’s main objective is to provide software support <br/>
            and innovative website ideas to help businesses reach their audience <br/>in a far more efficient way."</font></p>
            <p align='left'><font size='+2'>Manita Rai <br/> -Founder</font></p>
            <p align='right'><a href="http://localhost:3000/about" className="btn  btn-sm btn-dark btn-outline-light mb-2 p-3 mt-2 "><font className="p-2" color="white" >MORE ABOUT US</font></a></p>
        </div>
    </div>
    <div className='text-center  mt-9 mb-9 p-3'style= {{backgroundColor : '#F4FCFC ' }}>
    <h1 align='center'><font size='+80'><font face='lucida'><font color='#050505 '>OUR PROJECTS</font></font></font></h1>
    <p><font color='#050505 '>AWESOME PRODUCTS</font></p>

      <div className='d-flex justify-content-evenly container-center  mt-4 mb-4 p-4' >
        <div className='d-flex justify-content-evenly containertext-center  btn btn-sm btn-light' style = {{width : "36%"}} >
        <img align='left'height='500' width='580'src={that3}/>
        </div>
        <div className='d-flex justify-content-evenly containertext-center btn btn-sm btn-light ' style = {{width : "36%"}} >
        <img align='left'height='500' width='580' src={that1}/>
        </div>
        <div className='d-flex justify-content-evenly containertext-center btn btn-sm btn-light ' style = {{width : "36%"}} >
        <img  align='left'height='500' width='580' src={that2}/>
        </div>
      </div>
      <div className='text-center  mt-7 mb-7 p-3'style= {{backgroundColor : '#F4FCFC' }}>
        <p><a href="http://localhost:3000/portfolio" className="btn btn-sm btn-outline-light btn-dark mb-2 p-3 mt-2 "><font className="p-2" color="white" >VIEW PROJECTS </font></a></p>
      </div>
    </div>
    
</div>
  </div>
  )
}
export default Home;