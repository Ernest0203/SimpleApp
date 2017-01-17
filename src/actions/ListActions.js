import { 
	SET_ITEM, 
	POPUP_CLOSE,  
	CHOOSE_SIZE, 
	CHOOSE_QUANTITY, 
	SORT_PRICEUP, 
	SORT_PRICEDOWN, 
	SORT_AZ } from '../constants/List.js';

export function selectItem(item) {
	return {
		type: SET_ITEM,
		item: item,
		popupIsOpen: true 
	}
};

export function popupClose(e) {
	e.preventDefault();
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

export function chooseQuantity(e) {
	let quantity = e.target.value;
	return {
		type: CHOOSE_QUANTITY,
		quantity: quantity
	}
};

export function sort(e) {
	switch(e.target.value) {
		case SORT_PRICEUP:
			return {type: SORT_PRICEUP}
		case SORT_PRICEDOWN:
			return {type: SORT_PRICEDOWN}
		case SORT_AZ:
			return {type: SORT_AZ}
	}
}


