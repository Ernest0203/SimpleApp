import data from '../data.js';
import { SET_ITEM, POPUP_CLOSE,  CHOOSE_SIZE, CHOOSE_QUANTITY, SORT_PRICEUP, SORT_PRICEDOWN, SORT_AZ } from '../constants/List.js';

const initialState = {
	data: data,
	selectedItem: null,
	size: null,
	quantity: 0,
	popupIsOpen: false,
};

export default function list(state = initialState, action) {
	switch (action.type) {
		case SET_ITEM:
			return {...state, selectedItem: action.item, popupIsOpen: action.popupIsOpen}
		case POPUP_CLOSE:
			return {...state, popupIsOpen: action.popupIsOpen}
		case CHOOSE_SIZE:
			return {...state, size: action.size}
		case CHOOSE_QUANTITY:
			return {...state, quantity: action.quantity}
		case SORT_PRICEUP:
			return {...state, data: action.data}
		case SORT_PRICEDOWN:
			return {...state, data: action.data}
		case SORT_AZ:
			return {...state, data: action.data}
		default: 
			return state;
	}
}