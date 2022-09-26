import React, { Fragment, useEffect } from 'react'
import './Home.css'
import {icons} from "../../Assets/images"
import ProductCard from "../../component/ProductCard"
import PageHelmet from '../../component/PageHelmet';
import { getAllProducts } from '../../Redux/Actions/productActions';
import {useDispatch, useSelector} from "react-redux"
import Loader from '../../component/Loader';
import { useAlert } from 'react-alert';


// const product={
//     images:[{url:"https://5.imimg.com/data5/PJ/DI/MY-3877854/round-neck-plain-tshirt-with-multi-color-design-1000x1000.png"}],
//     name:"T-Shirt",
//     price:"$30",
//     _id:"abidf"

// }

const Home = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading,error,products}=useSelector((state)=>state.products)


    useEffect(()=>{
        if(error){
           return alert.error(error)
        }
        //only pass function name not paranthesis
         dispatch(getAllProducts)
    },[dispatch, error, alert])
   
    
  return (
  
    <Fragment>
        {
            loading? (<Loader/>):  <Fragment>

            <PageHelmet title="ECOMMERCE SHOP"/>
            <div className="banner">
            <p>Welcom to Ecommerce Shop</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
        
            <a href="#container">
                <button>
                    Scroll <icons.IconMouse/>
                </button>
            </a>
            </div>
        
            <h1 className='homeheading'>Featured Products</h1>
        
            <div className="container" id="container">
        
                {products && products.map((product)=>(
                    <ProductCard key={product._id}  product={product}/>
                ))}
          
            </div>
        
           </Fragment>
        }
    </Fragment>
  
  )
}

export default Home
