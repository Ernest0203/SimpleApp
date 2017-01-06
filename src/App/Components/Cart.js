import React, {Component} from 'react';

export default class Cart extends Component {
	
	render() {
		return (
			<ul className="cart">
				{
					this.props.cart.map(item => {
						return (
							<li /*key={item.id}*/>
								<h5>{item.name}</h5>
							</li>
						)
					})
					
				}
			</ul>
		);
	}
}
