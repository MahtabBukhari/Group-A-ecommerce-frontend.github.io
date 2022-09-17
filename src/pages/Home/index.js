import React, { Fragment } from 'react'
import './Home.css'
import { CgMouse } from 'react-icons/all'

const Home = () => {
  return (
   <Fragment>
    <div className="banner">
    <p>Welcom to Ecommerce Shop</p>
    <h1>FIND AMAZING PRODUCTS BELOW</h1>

    <a href="#container">
        <button>
            Scroll <CgMouse/>
        </button>
    </a>
    </div>

    <h1 className='homeheading'>Featured Products</h1>

   </Fragment>
  )
}

export default Home
