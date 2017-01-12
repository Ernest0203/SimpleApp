import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as cartActions from '../actions/CartActions.js';
import Cart from './Cart.js'

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cartIsOpen: false
		};
		this.cartOpen = this.cartOpen.bind(this);
	};
	
	cartOpen(e) {
		e.preventDefault();
		this.props.cartActions.cartToggle();
	}
	
	render() {
		return (
			<div className="navbar">
				<a href="" className="btn-cart" onClick={this.cartOpen}>
					<span className="cart-items">{this.props.cart.length}</span>
				</a>
				<Cart 
					cart={this.props.cart} 
					remove={this.props.remove} 
					total={this.props.total} 
					open={this.state.cartIsOpen}
					cartClose={this.cartToggle}/>
			</div>
		);
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
