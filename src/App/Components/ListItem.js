import React, {Component} from 'react';

export default class ListItem extends Component {
	
	render() {
		let item = this.props.data

		return (
			<li className="list__item" onClick={() => this.props.onItemSelect(item)}>
				<img src={item.image}/>
				<h4>{item.name}</h4>
				<p>Цена: {item.price}$</p>
			</li>
		)
	}
		
}