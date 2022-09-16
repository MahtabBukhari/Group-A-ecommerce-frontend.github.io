import React from 'react';
import {ReactNavbar} from "overlay-navbar"
import logo from '../../../images/logo.png'

const theme={
  brandColor:"orange",
  iconColor:"rgb(35,35,35,0.8)",
  navColor:"rgba(0,0,0,0.4)",
  linkColor:"rgb(34,35,35,0.8)"
}

const header = () => {
  return <ReactNavbar
  burgerColor={theme.brandColor}

  navColor1={theme.navColor}

  logo={logo}
  logoWidth="20vmax"
  logoHoverSize="10px"
  logoHoverColor={theme.brandColor}



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
  link1Color={theme.linkColor}
  link1ColorHover={theme.brandColor}
  link1Margin="1vmax"

  profileIconColor={theme.iconColor}
  searchIconColor={theme.iconColor}
  cartIconColor={theme.iconColor}
  
  profileIconColorHover={theme.brandColor}
  searchIconColorHover={theme.brandColor}
  cartIconColorHover={theme.brandColor}

  cartIconMargin="1vmax"
  />
    
   
}

export default header