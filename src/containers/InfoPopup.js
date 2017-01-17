import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InfoPopupComponent from '../components/InfoPopupComponent.jsx';
import * as listActions from '../actions/ListActions.js';
import * as cartActions from '../actions/CartActions.js';

function mapStateToProps (state) {
	return {
		item: state.list.selectedItem,
		popupIsOpen: state.list.popupIsOpen,
		size: state.list.size,
		quantity: state.list.quantity,
		cart: state.cart.cart
	}
};

function mapDispatchToProps(dispatch) {
	return {
		listActions: bindActionCreators(listActions, dispatch),
		cartActions: bindActionCreators(cartActions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPopupComponent)