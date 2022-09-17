import React from 'react'
import { Link } from 'react-router-dom'

// npm i react-star-rating-component
import ReactStar from "react-star-rating-component";

const options={
    name:'star',
    edit:false,
    value:2.5,
    isHalf:true,
    activeColor:'tomato',
    size:window.innerWidth < 600 ? 20 : 25
}



const Products = ({product}) => {
 
  return (
    <Link className='productCard'   to={product._id}>
    
       <img src={product.images[0].url} alt={product.name} />
       <p>{product.name}</p>

       <div>
        <ReactStar  {...options}/> <span>(234 reviews)</span>
       </div>

       <span>{product.price}</span>
    
    </Link>
   
  )
}

export default Products
