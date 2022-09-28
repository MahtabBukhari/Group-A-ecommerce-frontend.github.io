import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../Types/productConstants";

export const getAllProducts =
  (keyword='', price=[0,25000], currentPage=1,category,rating=0) =>
  async (dispatch) => {
   

    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      //data is received from the backend and strore in payload so now payload is used as data as data is store in payload

      //if keyword receive then first link will work otherwise second link will work
     
      let filterLink =`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${rating}`;
      
      if(category){
        filterLink =`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${rating}`;

      }

      const {data} = await axios.get(filterLink)

      console.log(data);

      // console.log(data) from this we can see the data that is present in data

      dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data });


     
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// export const clearErrors=(dispatch)=>{
//     dispatch({type:CLEAR_ERROR})
// }

// PRODUCT DETAIL

export const getProductDetail = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST });
  try {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.massage,
    });
  }
};
