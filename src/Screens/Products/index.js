import React, { Fragment } from "react";
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

const Products = ({match}) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { products, loading, error, productsCount } = useSelector(
    (state) => state.products
  );

  let keyword = match.params.keyword

  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch(clearErrors())

    }
    dispatch(getAllProducts(keyword));
  }, [dispatch,keyword,alert,error]);
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
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

export default Products;
