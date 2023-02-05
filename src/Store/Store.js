import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CombineReducer from "../Reducer/CombineReducer";

const persistState = localStorage.getItem('reduxState')? JSON.parse(localStorage.getItem('reduxState')):{};

const enhancer = applyMiddleware(thunk);
const store = createStore(
    CombineReducer,
    persistState,
    enhancer
);

store.subscribe(()=>{
    localStorage.setItem('reduxState',JSON.stringify(store.getState()));
})
export default store;