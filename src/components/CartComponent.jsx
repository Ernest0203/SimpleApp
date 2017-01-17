import React, {Component} from 'react';

export default class CartComponent extends Component {
	constructor(props) {
		super(props);
		
		this.removeItem = this.removeItem;
	}

	removeItem(e, item) {
		e.preventDefault();
		let cart = [...this.props.cart];
		cart.splice(item, 1);
		this.props.cartActions.addToCart(cart);
	};
	
	render() {
		let sameItems = 0;
		let arr = this.props.cart.reduce((a, {id}) => (a[id] = (a[id]|0)+1, a), []);
		console.log(arr)
		let total = 0;
		if (this.props.cart) {
			this.props.cart.forEach((item) => {
				if (item.quantity > 1 && item.quantity < 4) {
					total += item.price * item.quantity
				}
				else if (item.quantity > 3 && item.quantity < 6) {
					total += (item.price * item.quantity) - ((item.price * item.quantity) * 0.15)
				}
				else if (item.quantity > 5) {
					total += (item.price * item.quantity) - ((item.price * item.quantity) * 0.25)
				}
				else {
					total += item.price
				}
			});
		};

		return (
			<div className={this.props.cartIsOpen ? 'cart-popup--show' : 'cart-popup'}>
				<div className="cart">
					<ul className="cart-list">
						{
							this.props.cart.map((item, index) => {
								return (
									<li key={index} className="cart-list__item">
										<div className="col">
											<img src={item.image} alt="" className="item-image"/>
										</div>
										<div className="col">
											<h5 className="item-name">{item.name}</h5>
											<span>Размер: {item.size}</span>
											<span>Количество: {item.quantity}</span>
											<span>Цена: {item.price}$</span>
											<a className="item-remove" href="" onClick={(e) => this.removeItem(e, index)}>&#10006;</a>
										</div>
									</li>
								);
							})
						}
					</ul>
					<p className="total-price">Сумма: {total}$</p>
					<a className="cart-close" href="" onClick={(e) => this.props.cartActions.cartToggle(e)}>&#10006;</a>
				</div>
			</div>
		);
	}
}

