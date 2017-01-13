import { SET_ITEM, POPUP_CLOSE,  CHOOSE_SIZE, CHOOSE_QUANTITY, SORT_PRICEUP, SORT_PRICEDOWN, SORT_AZ } from '../constants/List.js';

export function selectItem(item) {
	return {
		type: SET_ITEM,
		item: item,
		popupIsOpen: true 
	}
};

export function popupClose() {
	return {
		type: POPUP_CLOSE,
		popupIsOpen: false
	}
};

export function chooseSize(size) {
	return {
		type: CHOOSE_SIZE,
		size: size
	}
};

export function chooseQuantity(quantity) {
	return {
		type: CHOOSE_QUANTITY,
		quantity: quantity
	}
};

export function priceUp(data) {
	return {
		type: SORT_PRICEUP,
		data: data
	}
};

export function priceDown(data) {
	return {
		type: SORT_PRICEDOWN,
		data: data
	}
};

export function sortAz(data) {
	return {
		type: SORT_AZ,
		data: data
	}
};
