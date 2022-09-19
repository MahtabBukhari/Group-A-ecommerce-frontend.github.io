import React from 'react'
import { Link } from 'react-router-dom'

// npm i react-star-rating-component
import ReactStar from "react-star-rating-component";



const Products = ({product}) => {

  const options={
  name:"",
    edit:false,
    value:product.ratings,
    isHalf:true,
    activeColor:'tomato',
    size:window.innerWidth < 600 ? 20 : 25
}


 
  return (
    <Link className='productCard'   to={product._id}>
    
       <img src={product.images[0].url} alt={product.name} />
       <p>{product.name}</p>

       <div>
        <ReactStar  {...options}/> <span>({product.numOfReviews} Reviews)</span>
       </div>

       <span>{`$${product.price}`}</span>
    
    </Link>
   
  )
}

export default Products
