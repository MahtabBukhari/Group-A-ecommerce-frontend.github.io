import React, { Fragment, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAllProducts,
} from "../../Redux/Actions/productActions";
import {useAlert} from "react-alert"
import Loader from "../../component/Loader";
import ProductCard from "../../component/ProductCard";
import { useEffect } from "react";

import Pagination from "react-js-pagination"

const Products = ({match}) => {

  const [currentPage, setCurrentPage]=useState(1)

  const dispatch = useDispatch();
  const alert = useAlert();
  const { products, loading, error, productsCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  let keyword = match.params.keyword

const setCurrentPageNo=e=>{
  setCurrentPage(e)
}
  

  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }

  
    dispatch(getAllProducts(keyword, currentPage));
    
  }, [dispatch,keyword,alert,error,currentPage]);

  return (
    <div>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <h1 className="productsHeading">Products</h1>

            <div className="productsWrapper">
              {products &&
                products?.map((product) => (
                  <ProductCard key={product?._id} product={product} />
                ))}
            </div>

           
          
            <div className="paginationBox">
            <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="last"
            itemClass="page-item"
            linkClass="link-item"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
            disabledClass="disabled"
            hideDisabled="true"
            
            />
          </div> 
          
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

export default Products;
