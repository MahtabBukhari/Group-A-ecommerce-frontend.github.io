import React from 'react';
import {ReactNavbar} from "overlay-navbar"
import logo from '../../../images/logo.png'

const header = () => {
  return <ReactNavbar
  burgerColor="#eb4034"

  navColor1="rgba(0,0,0,0.4)"

  logo={logo}
  logoWidth="20vmax"
  logoHoverSize="10px"
  logoHoverColor="#eb4034"



  link1Text="Home"
  link2Text="Product"
  link3Text="Contact"
  link4Text="About"

  link1Url="/"
  link2Url="/product"
  link3Url="/contact"
  link4Url="/about"

  nav1justifyContent="flex-end"
  nav2justifyContent="flex-end"
  nav3justifyContent="flex-start"
  nav4justifyContent="flex-start"

  link1Size="1.3vmax"
  link1Color="rgb(35,35,35,0.8)"
  link1ColorHover="#eb4034"
  link1Margin="1vmax"

  profileIconColor="rgb(35,35,35,0.8)"
  searchIconColor="rgb(35,35,35,0.8)"
  cartIconColor="rgb(35,35,35,0.8)"
  
  profileIconColorHover="#eb4034"
  searchIconColorHover="#eb4034"
  cartIconColorHover="#eb4034"

  cartIconMargin="1vmax"
  />
    
   
}

export default header