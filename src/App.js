import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './navigation/Navigation';
import Top from './top/Top'

import'tachyons';

const particlesoptions={
  particles: {
    number:{
      value:900,
    density:{
      enable:true,
      value_area:300
    }       
}
}
}

function App() {
  return (
    <div className="App">
     <Particles className="particles" part={particlesoptions}/>
      <Navigation/> 
      <Top />  
    </div>
  );
}

export default App;
