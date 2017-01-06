import React, {Component} from 'react';
import { render } from 'react-dom';

import Cart from './Cart.js';

export default class InfoPopup extends Component {
	constructor(props) {
		super(props);
		
		this.updateCart = this.updateCart.bind(this)
	}
	
	popupHide(e) {
		e.preventDefault();
		document.querySelector('.popup').classList.remove('popup--show');
		document.body.style.overflow = '';
	}
	
	updateCart() {
		let item = {};
		item.id = this.props.item.id;
		item.name = this.props.item.name;
		return item;
	}

	render() {
		let item = this.props.item;

		return (
			<div className="info">
				<div className="col">
					<img src={item.image} className="info__image"/>				
				</div>
				<div className="col">
					<h3 className="info__name">{item.name}</h3>
					<p className="info__desc">{item.desc}</p>
					<div className="info__sizes">
						<form className="form-buy" onSubmit={this.props.update(this.updateCart())}>
							<fieldset className="form-buy__sizes">
								{
									item.sizes.map(size => {
										return (
											<label className="form-buy__size">
												<input type="radio" name="options"/>
												<span>{size}</span>
											</label>
										)
									})
								}
							</fieldset>
							<fieldset>
								<label className="info__price">Цена: <input type="text" value={item.price} readOnly/>$</label>
								<label className="info__quantity">Количество: <input type="number" min="1" max="9" defaultValue="1" /></label>
							</fieldset>
							<button type="submit" className="btn-buy" href="">Купить</button>
						</form>
					</div>
					<a className="popup-hide" href="" onClick={this.popupHide.bind(this)}>&#10006;</a>				
				</div>
			</div>
		);
	}
}

