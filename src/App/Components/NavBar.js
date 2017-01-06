import React, {Component} from 'react';
import { render } from 'react-dom';

import Cart from './Cart.js'

export default class NavBar extends Component {
	cartShow(e) {
		e.preventDefault();
    const popup = document.querySelector('.popup');
    popup.classList.add('popup--show');
		document.body.style.overflow = 'hidden';
    render(<Cart cart={this.props.cart} />, popup);
	}

	render() {
		return (
			<div className="navbar">
				<a href="" className="btn-cart" onClick={this.cartShow.bind(this)}>
					<span className="cart-items"></span>
				</a>
				<Cart cart={this.props.cart}/>
			</div>
		);
	}
}
