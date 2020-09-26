import {applyMiddleware, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./rootReducer";

const enhancer = applyMiddleware(thunkMiddleware);

export default createStore(rootReducer, enhancer)
