
import React, { useEffect } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './component/layout/Header/Header'
import Footer from './component/layout/Footer/Footer'

import WebFont from 'webfontloader'

function App() {
  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Roboto','Droid Sans', 'Droid Serif']
      }
    });
    
  },[])
  

  return (
    <Router>
      <Header/>


      <Footer/>
    </Router>
  )
}

export default App;
