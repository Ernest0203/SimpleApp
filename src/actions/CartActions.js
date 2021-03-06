import { ADD_TO_CART, CART_TOGGLE } from '../constants/Cart.js';

export function addToCart(item) {
	return {
		type: ADD_TO_CART,
		item: item
	}
};

export function cartToggle(e) {
	e.preventDefault();
	return {
		type: CART_TOGGLE
	}
};

