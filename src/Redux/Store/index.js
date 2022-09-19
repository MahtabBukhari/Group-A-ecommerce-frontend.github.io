import {createStore,combineReducers,applyMiddleware} from"redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productReducer } from "../Reducers/productReducer";


const reducer = combineReducers({
products:productReducer
})

let initialState={}




const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk)))



export default store;