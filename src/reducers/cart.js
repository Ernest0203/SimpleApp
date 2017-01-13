import { ADD_TO_CART, CART_TOGGLE } from '../constants/Cart.js';

const initialState = {
	cart: [],
	cartIsOpen: false,
};

export default function cart(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART:
			return {...state, cart: action.item}
		case CART_TOGGLE:
			return {...state, cartIsOpen: !state.cartIsOpen}
		default: 
			return state;
	}
}