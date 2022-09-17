
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './layout/Header'
import Footer from './layout/Footer'
import WebFont from 'webfontloader'
import Home from "./pages/Home"

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
<Route exact path="/" component={Home}/>

      <Footer/>
    </Router>
  )
}

export default App;
