import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as listActions from '../actions/ListActions.js';
import * as cartActions from '../actions/CartActions.js';

class InfoPopup extends Component {
	constructor(props) {
		super(props);
	
		this.chooseSize = this.chooseSize.bind(this);
		this.chooseQuantity = this.chooseQuantity.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.popupHide = this.popupHide.bind(this);
	}
	
	chooseSize(size) {
		this.props.cartActions.chooseSize(size);
	};

	chooseQuantity(e) {
		let quantity = e.target.value;
		this.props.cartActions.chooseQuantity(quantity);
	};

	addToCart() {
		if (!this.props.size) {
			return alert('Выберите размер!')
		};
		let cart = [...this.props.cart] ;
		let item = this.props.item;
		let newItem = {
			id: item.id,
			image: item.image,
			name: item.name,
			size: this.props.size,
			quantity: this.props.quantity,
			price: item.price
		};
		cart.push(newItem);
		this.props.cartActions.addToCart(cart)
	}

	popupHide(e) {
		e.preventDefault()
		this.props.listActions.popupClose();
	}

	render() {
		if(this.props.item){
			let item = this.props.item;

			return (
				<div className={this.props.popupIsOpen ? 'info-popup--open' : 'info-popup'}>
					<div className="info">
						<div className="col">
	 						<img src={item.image} className="info__image"/>				
	 					</div>
	 					<div className="col">
	 						<h3 className="info__name">{item.name}</h3>
	 						<p className="info__desc">{item.desc}</p>
							<div className="info__sizes">
								{
									item.sizes.map((size, index) => {
										return (
											<label key={index} className="info__size">
												<input type="radio" name="options"/>
												<span  onClick={() => this.chooseSize(size)}>{size}</span>
											</label>
										)
									})
								}
							</div>
							<span className="info__price">Цена: {item.price}$</span>
							<label className="info__quantity">Количество: 
								<input type="number" min="1" max="9" defaultValue="1" onChange={this.chooseQuantity}/>
							</label>
							<button className="btn-buy" href="" onClick={this.addToCart}>Купить</button>
							<a className="popup-hide" href="" onClick={this.popupHide}>&#10006;</a>				
	 					</div>
					</div>
				</div>
			);
		}
		else {return <div></div>}
	}
}

function mapStateToProps (state) {
	return {
		item: state.list.selectedItem,
		popupIsOpen: state.list.popupIsOpen,
		size: state.cart.size,
		quantity: state.cart.quantity,
		cart: state.cart.cart
	}
};

function mapDispatchToProps(dispatch) {
	return {
		listActions: bindActionCreators(listActions, dispatch),
		cartActions: bindActionCreators(cartActions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPopup)