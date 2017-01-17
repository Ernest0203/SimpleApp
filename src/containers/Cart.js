import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as cartActions from '../actions/CartActions.js';
import CartComponent from '../components/CartComponent.jsx';

function mapStateToProps (state) {
	return {
		cart: state.cart.cart,
		cartIsOpen: state.cart.cartIsOpen,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		cartActions: bindActionCreators(cartActions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent)