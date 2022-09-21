
import {ALL_PRODUCT_REQUEST,ALL_PRODUCT_FAIL,ALL_PRODUCT_SUCCESS, CLEAR_ERROR, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from "../Types/productConstants";



export const productReducer=(state={},action)=>{
    switch(action.type){
        case ALL_PRODUCT_REQUEST:
            return{
                loading:true,
                products:[]
            }
        case ALL_PRODUCT_SUCCESS:
            return{
                loading:false,

                // here getProducts and productsCount is comming from server or return by server
                products:action.payload.getProducts,
                productsCount:action.payload.productsCount
            }
        case ALL_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case CLEAR_ERROR:
            return{
               
                ...state,
                error:null
            }
        default:
          return  state;
    }
}



export const productDetailReducer=(state={},action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                loading:true,
                productDetail:{}
            }
        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,

                // here the name after payload.  is that name that is comming from server
                productDetail:action.payload.getOneProduct,

            }
        case PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
           return state
    }
}