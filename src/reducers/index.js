import { combineReducers } from 'redux';
import list from './list.js';
import cart from './cart.js';

export default combineReducers({
	list,
	cart
})