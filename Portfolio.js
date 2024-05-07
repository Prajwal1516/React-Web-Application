import React from 'react'
import port1 from '../image/port1.jpg';
import port11 from '../image/port11.jpg';
import port22 from '../image/port22.jpg';
import port3 from '../image/port3.jpg';
import port33 from '../image/port33.jpg';
import port5 from '../image/port5.jpg';
import port55 from '../image/port55.jpg';
import port4 from '../image/port44.jpg';
import port44 from '../image/port44.jpg';
import newport from '../image/newport.jpg';
import newport1 from '../image/newport1.jpg';
import ashwa from '../image/ashwa.jpg';
import jsf from '../image/jsf.jpg';

function Portfolio() {
  return (
    <div>
      <div className='portfoliodivision p-5 mb-10'>
      <h3 className='text-center-underline mb-10 p-5'></h3>

         <div className='text-center-underline mb-10 p-5' >
             <h1><font size="+100"><font face="Monospaced"><font color='#FFFFFF'>PORTFOLIO</font></font></font></h1>
         </div>
      </div>

      <div className='text-dark mt-10 mb-10 p-5' style={{backgroundColor : '#F4FCFC '}}>
           <div className='d-flex justify-content-evenly container text-center mt-5 mb-5 p-5' >
                 <img height='400' width='400' src={port1}/>
                 <img height='650' width='400' src={newport}/>
                    <div className='text-dark text-left m-5 p-5' style={{width :'30%'}} >
                       <h1 align='left'>clap collaboration</h1>
                       <p align='left'>clap collaboration is a team of SAFe experts who provide 
                       training and conducts regular webinars on Scaled Agile Framework (SAFe) 
                       for the working professionals.</p>
                       <p><a href='https://clapcollab.com/' className='btn btn-sm btn-dark mb-5 p-2'>VIEW PROJECT</a></p>
                    </div>
           </div>

           <div className='d-flex justify-content-evenly container text-center mt-5 mb-5 p-5' >
                 <img height='650' width='400' src={newport1}/>
                 <img height='400' width='400' src={jsf}/>
                    <div className='text-dark text-left m-5 p-5' style={{width :'30%'}} >
                       <h1 align='left'>J.S.A.F</h1>
                       <p align='left'>Jeeva Sanjeevani Ayurveda Foundation is an Ayurvedic clinic
                        in Bangalore who have years of experience in treating various illnesses using 
                        ancient Ayurvedic methods.</p>
                        <p><a href='http://www.jsaf.in/' className='btn btn-sm btn-dark mb-5 p-2'>VIEW PROJECT</a></p>
                    </div>
           </div>

           <div className='d-flex justify-content-evenly container text-center mt-5 mb-5 p-5' >
                 <img height='400' width='400' src={port3}/>
                 <img height='650' width='400' src={port33}/>
                    <div className='text-dark text-left m-5 p-5' style={{width :'30%'}} >
                       <h1 align='left'>Best Arts</h1>
                       <p align='left'>Best Arts is an interior designing company based in Bangalore. 
                       The company is primarily focussed on creating 2D and 3D designs in wood 
                       and wood carvings for all types of interior designing purposes</p>
                       <p><a href='http://www.bestarts.epizy.com/?i=1' className='btn btn-sm btn-dark mb-5 p-2'>VIEW PROJECT</a></p>
                    </div>
           </div>

           <div className='d-flex justify-content-evenly container text-center mt-5 mb-5 p-5'>
                 <img height='650' width='400' src={ashwa}/>
                 <img height='400' width='400' src={port4}/>
                    <div className='text-dark text-left m-5 p-5' style={{width :'30%'}} >
                       <h1 align='left'>San Ashwa</h1>
                       <p align='left'>SanAshwa® is a unique and powerful anti-stress herbal supplement 
                       featuring AGW-20™ (A balanced blend of Ashwagandha high-potency root extract and 
                       full-spectrum root powder), High strength Holy Basil Extract – the ancient, adaptogenic 
                       herbs that helps reduce the effects of stress on the body.</p>
                       <p><a href='https://sanashwa.com/' className='btn btn-sm btn-dark mb-5 p-2'>VIEW PROJECT</a></p>
                    </div>
           </div>

           <div className='d-flex justify-content-evenly container text-center mt-5 mb-5 p-5' >
                 <img height='400' width='400' src={port55}/>
                 <img height='650' width='400' src={port5}/>
                    <div className='text-dark text-left m-5 p-5' style={{width :'30%'}} >
                       <h1 align='left'>Sandhu Herbals</h1>
                       <p align='left'>Sandhu Herbals was established to provide customers with high
                        quality, natural, nutritional supplements. Building on your trust and our passion for 
                        quality, consistency, and scientific research, they  continue to innovate and deliver 
                        an exceptionally pure line of science-based nutritional supplements. </p>
                        <p><a href='https://www.sandhuherbals.com/' className='btn btn-sm btn-dark mb-2 p-2'>VIEW PROJECT</a></p>
                    </div>
           </div>   
      </div>
    </div>
  )
}

export default Portfolio;