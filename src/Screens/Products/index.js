import React, { Fragment, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productActions";
import { useAlert } from "react-alert";
import Loader from "../../component/Loader";
import ProductCard from "../../component/ProductCard";
import { useEffect } from "react";
import PageHelmet from "../../component/PageHelmet";

import { Slider, Typography } from "@mui/material";

import Pagination from "react-js-pagination";
const categories = ["Laptop", "Footwear", "Camera", "Tops"];

const Products = ({ match }) => {
  const [category, setCategory] = useState("");

  const [price, setPrice] = useState([0, 25000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rating, setRatings]=useState(0)

  const dispatch = useDispatch();
  const alert = useAlert();
  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  let keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getAllProducts(keyword, price, currentPage,category,rating));
  }, [dispatch, keyword, alert, error, currentPage, price,category,rating]);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  return (
    <div>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <PageHelmet title="Products" />
            <h1 className="productsHeading">Products</h1>

            <div className="productsWrapper">
              {products &&
                products?.map((product) => (
                  <ProductCard key={product?._id} product={product} />
                ))}

            </div>

            

            <div className="filterBox">
              <Typography>Price</Typography>
              <Slider
                sx={{ color: "orange" }}
                aria-labelledby="range-slider"
                value={price}
                valueLabelDisplay="auto"
                onChange={priceHandler}
                min={0}
                max={25000}
              />


<Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="categoryLink"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings</Typography>
              <Slider
              value={rating}
              sx={{color:"orange"}}
              valueLabelDisplay="auto"
              onChange={(e,newRating)=>{
                setRatings(newRating)
              }}
              aria-labelledby="continuous-slider"
              min={0}
              max={5}
              
              />
            </fieldset>
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
                hideDisabled={true}
              />
            </div>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

export default Products;
