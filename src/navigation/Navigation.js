import React from 'react';
import  './Navigation.css'

 const Navigation= ()=>{
     
    return(   
   <div width="100px" className="color">
   <h1 className="f1  " >F I N A  L T I C S</h1>
   <nav className="pt0 mv0" width="300px" style={{display:"flex", justifyContent:'center'}}>
   <h2  className="fw6 ph0 mh0  pa0  mv2 " style={{fontSize:"2spx",fontWeight:"bold",color:"#00fcf0 ",width:"400px",justifyContent:"center",display:"inline-block",margin:0,position:"fixed"}}>
   Accounting and finance simplified
   </h2>
   <div display="inline" style={{marginLeft:"1000px"}}>
    <p className="pt0 mt0 f3 link dim white underline pa3 pointer" >HOME</p>
    <p className="pt0 mt0 f3 link dim white underline pa3 pointer" >SERVICES</p>
    </div>
    </nav>
<div>
<span style={{color:"#00fcf0"}} >Virtual | pay as you go |Shared service | collective expertise | digital</span>
</div>

   </div>
   
      
    )

 }


 export default Navigation;