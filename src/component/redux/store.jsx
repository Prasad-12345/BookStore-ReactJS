import { createStore, applyMiddleware, combineReducers } from 'redux';
import {getCartApiDetails} from '../redux/moduleReducer'

const reducer = combineReducers({
	GetCartApiDetails: getCartApiDetails,
	
});

const store = createStore(reducer)

export default store;