
import React, { useEffect } from 'react';
import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import {layout} from './ReferenceConstant'

import WebFont from 'webfontloader'
import {screens} from "./ReferenceConstant"

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
      <layout.Header/>
<Route exact path="/" component={screens.Home}/>

      <layout.Footer/>
    </Router>
  )
}

export default App;
