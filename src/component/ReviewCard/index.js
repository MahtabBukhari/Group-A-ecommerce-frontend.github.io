import React from 'react'

import ReactStar from "react-star-rating-component";

const ReviewCard = ({review}) => {
    const options={
        name:"",
        edit:false,
        value:review?.rating,
        isHalf:true,
        activeColor:'tomato',
        size:window.innerWidth < 600 ? 30 : 25
    }
  

  return (
    <div className='reviewCard'>
        <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' alt="profile" />
        <p>{review?.name}</p>
        <ReactStar {...options}/>
        <span>{review?.comment}</span>
     
    </div>
  )
}

export default ReviewCard
