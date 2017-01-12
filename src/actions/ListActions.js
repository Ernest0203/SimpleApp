import { SET_ITEM, POPUP_CLOSE } from '../constants/List.js';

export function selectItem(item) {
	return {
		type: SET_ITEM,
		payload: {
			item: item,
			popupIsOpen: true 
		}
	}
};

export function popupClose() {
	return {
		type: POPUP_CLOSE,
		payload: false
	}
};

