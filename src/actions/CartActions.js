import { CHOOSE_SIZE, CHOOSE_QUANTITY, ADD_TO_CART, CART_TOGGLE } from '../constants/Cart.js';

export function chooseSize(size) {
	return {
		type: CHOOSE_SIZE,
		payload: size
	}
};

export function chooseQuantity(quantity) {
	return {
		type: CHOOSE_QUANTITY,
		payload: quantity
	}
};

export function addToCart(item) {
	return {
		type: ADD_TO_CART,
		payload: item
	}
};

export function cartToggle() {
	return {
		type: CART_TOGGLE
	}
};

