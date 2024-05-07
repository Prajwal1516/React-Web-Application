import React from 'react'
import servicewe from '../image/servicewe.jpg';
import servi1 from '../image/servi1.jpg';
import servi2 from '../image/servi2.jpg';
import servi3 from '../image/servi3.jpg';
import servi4 from '../image/servi4.jpg';
import servi5 from '../image/servi5.jpg';
import servi6 from '../image/servi6.jpg';

function Service() {
  return (
    <div>
      <div className='servicedivision p-5 mb-10'>
        <h3 className='text-center-underline mb-10 p-5'></h3>
          <div className='text-left-underline m-2 p-2' >
            <h1><font size="+100"><font face="Lucida"><font color='#070707 '>SERVICES</font></font></font></h1>
          </div>
      </div>

      <div className='text-dark mt-10 mb-10 p-5' style={{backgroundColor : '#F4FCFC '}}>
        <div className='d-flex justify-content-evenly container '>
        <img align='left' height='400' width='600'src={servicewe}/>
             <div className='text-dark text-left m-2 p-2' >
                <h1 align='left'><font size='+10'><font face="Lucida">Enable a return to<br/>profitability</font></font></h1><br/>
                <p><font size='+2'>We offer some of the best services that you can find in <br/>the market for some of the most affordable prices to suit<br/> your business needs.</font></p>
             </div>
        </div>
      </div>  

     <div className='text-center mt-9 mb-9 p-4'style= {{backgroundColor : '#F4FCFC' }}>
         <h1><font size='+80'><font face='Lucida'><font color='#080808 '>Our Services</font></font></font></h1>
         <p><font color='#080808 '>100% SATISFACTION GUARANTEED !</font></p>

         
          <div className='d-flex justify-content-evenly container text-center mt-9 mb-9 p-4' style = {{width : "40%"}} >
             <img height='200' width='300' src={servi1}/>
             <div className='text-dark border bg-primary-subtle text-left m-2 p-2' >
              <h1 align='left'>Website Design</h1>
             <p align='left'>We have a team of experts who specialise in creating unique and eye-catching website designs</p>
             </div>
             <img height='200' width='300' src={servi2}/>
             <div className='text-dark text-left m-2 p-2' >
              <h1 align='left'>Application Development</h1>
             <p align='left'>We also develop applications for various different types of needs such as e-commerce, data science, machine learning and so on</p>
             </div>
          </div>

          <div className='d-flex justify-content-evenly container text-center mt-9 mb-9 p-4' style = {{width : "-60%"}} >
             <img height='200' width='300' src={servi3}/>
             <div className='text-dark  text-left m-2 p-2' >
              <h1 align='left'>Search Engine Optimisation</h1>
             <p align='left'>We provide digital marketing services such as graphic design and Search Engine Optimisation (SEO)</p>
             </div>
             <img height='200' width='300' src={servi4}/>
             <div className='text-dark border bg-primary-subtle text-left m-2 p-2' >
              <h1 align='left'>E-Commerce Websites</h1>
             <p align='left'>We can build professional looking e-commerce websites with payment gateways tailored to suit all your online-selling needs</p>
             </div>
          </div>

          <div className='d-flex justify-content-evenly container text-center mt-9 mb-9 p-4' style = {{width : "40%"}} >
             <img height='200' width='400' src={servi5}/>
             <div className='text-dark border bg-primary-subtle text-left m-2 p-2' >
              <h1 align='left'>Website Maintenance</h1>
             <p align='left'>Additionally, we provide 24/7 support to all our customers related to technical or non-technical queries. We also offer additional security services to make sure your applications/websites are fully secure from threats!</p>
             </div>
             <img height='200' width='200' src={servi6}/>
             <div className='text-dark text-left m-2 p-2' >
              <h1 align='left'>Website Hosting Services</h1>
             <p align='left'>Your websites will be hosted on our super-fast secure servers which ensures that your website is secure from attacks and up and running 24/7</p>
             </div>
          </div>
      </div>
    <div className='text-dark text-center mt-9 mb-9 p-5' style={{backgroundColor : '#E4F3FB'}}>
           <h1><font size='+80'><font face='Lucida'><font color='#080808 '>TAKE A LOOK</font></font></font></h1>
           <p><font color='#080808 '>WHAT MAKES US UNIQUE !</font></p>

      <div className='text-left d-flex justify-content-evenly container mt-5 mb-5 p-5 '>
        <div className='ms-4 mt-4' style={{width :'60%'}}>
          <h5>CUSTOMER SATISFACTION AND FEEDBACK</h5>

          <p className='mt-4'>Website Design</p>
          <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
             <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width :'100%'}}>100</div>
          </div>

          <p className='mt-4'>Website Security</p>
          <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
             <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width :'98%'}}>98</div>
          </div>

          <p className='mt-4'>Website Maintainance</p>
          <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
             <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width :'98%'}}>98</div>
          </div>

          <p className='mt-4'>Website Speeds</p>
          <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
             <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width :'90%'}}>90</div>
          </div>

          <p className='mt-4'>Search Engine Optimization</p>
          <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
             <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width :'90%'}}>90</div>
          </div>

          <p className='mt-4'>Overall Satisfaction</p>
          <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
             <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width :'95%'}}>95</div>
          </div>

        </div>

        <div className='text-left d-flex justify-content-evenly container mt-5 mb-5 p-5 '>
          <ul>
            <li><font size='+2'>Some of the highest quality  and unique designs in the market.</font></li>
            <li><font size='+2'>524/7 support to ensure that you have a fully functional application at all times.</font></li>
            <li><font size='+2'>Our websites and applications are built considering security in mind. While other companies use cracked and nulled themes and plugins, we at ECODERS custom develop designs and use only original themes and plugins.</font></li>
            <li><font size='+2'>While others charge exorbitant amounts for just basic website designs, our prices are very much affordable.</font></li>
            <li><font size='+2'>Professionals who have years of experience in the software and IT industries.</font></li>
          </ul>
        </div>
      </div>
    </div>
 </div>
  )
}

export default Service;