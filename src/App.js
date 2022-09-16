
import React, { useEffect } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './component/layout/header'
import WebFont from 'webfontloader'

function App() {
  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['roboto','Droid Sans', 'Droid Serif']
      }
    });
    
  },[])
  

  return (
    <Router>
      <Header/>
    </Router>
  )
}

export default App;
