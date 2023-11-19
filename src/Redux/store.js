import { legacy_createStore, combineReducers,applyMiddleware } from "redux";
import { reducer } from './reducer'; 
import thunk from 'redux-thunk'
const rootReducer = combineReducers({ reducer });
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))