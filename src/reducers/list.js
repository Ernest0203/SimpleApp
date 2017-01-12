import data from '../data.js';
import { SET_ITEM, POPUP_CLOSE } from '../constants/List.js';

const initialState = {
	data: data,
	selectedItem: null,
	popupIsOpen: false,
};

export default function list(state = initialState, action) {
	switch (action.type) {
		case SET_ITEM:
			return {...state, selectedItem: action.payload.item, popupIsOpen: action.payload.popupIsOpen}
		case POPUP_CLOSE:
			return {...state, popupIsOpen: action.payload}
		default: 
			return state;
	}
}