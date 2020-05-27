import React from 'react';
import app from './account.jpg'

import './Top.css'



 const Top= ()=>{
 
     
    return( 
  
     
   <div className="boxmodel" style={{justifyContent:"center", display:"flex"}} >
    <img className='pa5 pv4' src={app}  width="400px"/>
  <div style={{width:"170px",fontFamily:"raleway",justifyContent:"right"}} >
  <h3 className="dim white"><span>Revenue</span></h3>
   <h3 className="dim white "><span>operations</span></h3>
  <h3 className="dim white"><span>tax</span></h3>
  <h3 className="dim white"><span>costing</span></h3>
  <h3 className="dim white"><span>planning</span></h3>
  <h3 className="dim white"><span>payroll</span></h3> 
   </div>
   </div>

 )
 }


 export default Top;