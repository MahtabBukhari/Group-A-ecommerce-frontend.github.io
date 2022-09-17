import React from 'react'
import './Footer.css'
import playStore from '../../images/Playstore.png'
import appStore from '../../images/Appstore.png'

const Footer = () => {
  return (
   <footer id="footer">
    <div className="leftfooter">
      <h4>DOWNLOAD APP</h4>
      <p>Download our app for Android and IOS mobile phones</p>
      <img src={playStore} alt="PlayStore" />
      <img src={appStore} alt="AppStore" />
    </div>

    <div className="midfooter">
      <h1>ECOMMERCE SHOP</h1>
      <p>High Quality is our first priority</p>
      <p>Copyrights 2022 &copy; MahtabBukjari</p>

    </div>

    <div className="rightfooter">
    <h4>FOLLOW US</h4>
    <a href="/">Instagram</a>
    <a href="/">Facebook</a>
    <a href="/">YouTube</a>
    </div>
   </footer>
  )
}

export default Footer