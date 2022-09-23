import React, { Fragment } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAllProducts,
} from "../../Redux/Actions/productActions";
import Loader from "../../component/Loader";
import ProductCard from "../../component/ProductCard";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAllProducts);
  }, [dispatch]);
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
