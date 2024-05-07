import React, {useState, useEffect } from 'react';

function Allstudent() 
{
    const [data, setData] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try{
       const fetchedstudentdata =  await fetch('http://127.0.0.1:5000/');
       const allstudents = await fetchedstudentdata.json();
       setData(allstudents.data);
      }
      catch(error)
      {
        console.log('Error fetching data:', error);
      }
    }
  return (
    <div className='container border'>
         <h4 className = "text-decoration-underline text-center m-2">ALL STUDENT LIST</h4>
         <table className="table text-center table-hover">
              <thead>
                <tr>
                  <th scope="col" className='bg-dark text-light'>ID</th>
                  <th scope="col" className='bg-dark text-light'>FIRST NAME</th>
                  <th scope="col" className='bg-dark text-light'>LAST NAME</th>
                  <th scope="col" className='bg-dark text-light'>E-MAIL</th>
                  <th scope="col" className='bg-dark text-light'>COURSE</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((eachstudent)=>{
                   return ( <tr>
                    <th>{eachstudent.id}</th>
                    <td>{eachstudent.first_name}</td>
                    <td>{eachstudent.last_name}</td>
                    <td>{eachstudent.email}</td>
                    <td>{eachstudent.comments}</td>
                    </tr>)
                  })
                }
              </tbody>
            </table>
      </div>
  )
}
export default Allstudent;