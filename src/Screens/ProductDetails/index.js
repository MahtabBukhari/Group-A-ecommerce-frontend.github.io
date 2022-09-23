import React, { Fragment, useEffect } from "react";
import "./productDetail.css";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetail } from "../../Redux/Actions/productActions";
import Carousel from "react-material-ui-carousel";
import ReactStar from "react-star-rating-component";
import ReviewCard from "../../component/ReviewCard";
import Loader from "../../component/Loader";


// match
// A match object contains information about how a <Route path> matched the URL. match objects contain the following properties:
// params,isExact, path, url

const ProductDetail = ({ match }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, productDetail } = useSelector(
    (state) => state.productDetail
  );
  // console.log(productDetail.images)
  useEffect(() => {
    if (error) {
     alert.error(error);
     dispatch({type:clearErrors()})
    }

    dispatch(getProductDetail(match.params.id));
  }, [dispatch, error, alert, match]);

  const options={
      name:"",
      edit:false,
      value:productDetail?.ratings,
      isHalf:true,
      activeColor:'tomato',
      size:window.innerWidth < 600 ? 30 : 25
  }

  return (
  <Fragment>
    {loading? <Loader/>:(  <Fragment>
      <div className="productDetails">
        <div>
          <Carousel sx={{width:"18vmax",height:"22vmax",textAlign:"center"}}>
            {productDetail?.images?.map((item, i) => (
              <img
                className="CarouselImage"
                key={item?._id}
                src={item?.url}
                alt={`${i} slide`}
              />
            ))}
          </Carousel>
        </div>

        <div>
          <div className="detailsBlock-1">
            <h1>{productDetail?.name}</h1>
            <p>product # {productDetail?._id}</p>
          </div>

          <div className="detailsBlock-2">
          <ReactStar  {...options}/>
           <span>({productDetail?.numOfReviews} Reviews)</span>
          </div>

          <div className="detailsBlock-3">
            <h1>{`$${productDetail?.price}`}</h1>
             <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                  <button>-</button>
                  <input value="1" type="Number" />
                  <button>+</button>
                </div>
                <button>Add To Cart</button>
             </div>

             <p>status: <b className={productDetail?.stock<1?"redColor":"greenColor"}>{productDetail?.stock<1?"OutOfStock":"InStock"}</b></p>
            
          </div>


          <div className="detailsBlock-4">
            Description:  <p>{productDetail?.description}</p>
          </div>

          <button className="SubmitReview"> Submit Review</button>
      </div>
      </div>
      <h1 className="reviewsHeading">Reviews</h1>
      {
        productDetail?.reviews&&productDetail?.reviews[0]?
      (  <div className="reviews">
          {productDetail?.reviews?.map((review)=><ReviewCard key={review._id} review={review}/>)}
        </div>): (<h3 className="noReview">No Review Yet</h3>)
       }


  
    </Fragment>) }
  </Fragment>
    
  );
};

export default ProductDetail;
