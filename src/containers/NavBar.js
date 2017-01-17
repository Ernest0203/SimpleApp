import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavBarComponent from '../components/NavBarComponent.jsx';
import * as cartActions from '../actions/CartActions.js';
import Cart from './Cart.js'

function mapStateToProps (state) {
	return {
		cart: state.cart.cart
	}
};

function mapDispatchToProps(dispatch) {
	return {
		cartActions: bindActionCreators(cartActions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)
