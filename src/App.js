
import React, { useEffect } from 'react';
import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
// import {layout} from './ReferenceConstant'

import Search from './component/Search';
import WebFont from 'webfontloader'
// import {screens} from "./ReferenceConstant"
import Home from './Screens/Home';
import ProductDetail from './Screens/ProductDetails';
import Products from './Screens/Products';
import Header from './layout/Header';
import Footer from './layout/Footer';

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
<Route  exact path="/product/:id" component={ProductDetail}/>
<Route exact path="/products"  component={Products} />
<Route path="/products/:keyword"  component={Products} />
<Route exact path="/Search" component={Search}/>


      <Footer/>
    </Router>
  )
}

export default App;
