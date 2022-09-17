import React, { Fragment } from 'react'
import './Home.css'
import { CgMouse } from 'react-icons/all'
import Products from"../../component/Products";
import PageHelmet from '../../component/PageHelmet';



const product={
    images:[{url:"https://5.imimg.com/data5/PJ/DI/MY-3877854/round-neck-plain-tshirt-with-multi-color-design-1000x1000.png"}],
    name:"T-Shirt",
    price:"$30",
    _id:"abidf"

}

const Home = () => {
  return (
   <Fragment>

    <PageHelmet title="ECOMMERCE SHOP"/>
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

    <div className="container" id="container">
    <Products  product={product}/>
    <Products  product={product}/>
    <Products  product={product}/>
    <Products  product={product}/>
    <Products  product={product}/>
    <Products  product={product}/>
    <Products  product={product}/>
    <Products  product={product}/>

    </div>

   </Fragment>
  )
}

export default Home
