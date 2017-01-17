import React, {Component} from 'react';

export default class InfoPopup extends Component {
	constructor(props) {
		super(props);
		
		this.addToCart = this.addToCart.bind(this)
	}
	
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
												<span  onClick={() => this.props.listActions.chooseSize(size)}>{size}</span>
											</label>
										)
									})
								}
							</div>
							<span className="info__price">Цена: {item.price}$</span>
							<label className="info__quantity">Количество: 
								<input type="number" min="1" max="9" defaultValue="1" onChange={this.props.listActions.chooseQuantity}/>
							</label>
							<button className="btn-buy" href="" onClick={this.addToCart}>Купить</button>
							<a className="popup-hide" href="" onClick={(e) => this.props.listActions.popupClose(e)}>&#10006;</a>				
	 					</div>
					</div>
				</div>
			);
		}
		else {return <div></div>}
	}
}