import React, {Component} from 'react';

import Cart from '../containers/Cart.js'

export default class NavBar extends Component {
		
	render() {
		return (
			<div className="navbar">
				<a href="" className="btn-cart" onClick={(e) => this.props.cartActions.cartToggle(e)}>
					<span className="cart-items">{this.props.cart.length}</span>
				</a>
				<Cart />
			</div>
		);
	}
}