import { CHOOSE_SIZE, CHOOSE_QUANTITY, ADD_TO_CART, CART_TOGGLE } from '../constants/Cart.js';

const initialState = {
	cart: [],
	size: null,
	quantity: 0,
	cartIsOpen: false,
};

export default function cart(state = initialState, action) {
	switch (action.type) {
		case CHOOSE_SIZE:
			return {...state, size: action.payload}
		case CHOOSE_QUANTITY:
			return {...state, quantity: action.payload}
		case ADD_TO_CART:
			return {...state, cart: action.payload}
		case CART_TOGGLE:
			return {...state, cartIsOpen: !state.cartIsOpen}
		default: 
			return state;
	}
}