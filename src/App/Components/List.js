import React, { Component } from 'react';
import { render } from 'react-dom';

import Info from "./Info.js"

export default class List extends Component {
	constructor(props) {
		super(props);
		
		this.moreInfo = this.moreInfo.bind(this);
	}
	
	moreInfo(item) {
		return (e) => {
			e.preventDefault();
    	const popup = document.querySelector('.popup');
    	popup.classList.add('popup--show');
			document.body.style.overflow = 'hidden';
    	render(<Info item={item} update={this.props.update} />, popup);
		}
	}

	render() {
		return (
			<ul className="list">
				{
					this.props.data.map(item => {
						return <li key={item.id} className="list__item" onClick={this.moreInfo(item)}>
							<img src={item.image}/>
							<h4>{item.name}</h4>
							<p>Цена: {item.price}$</p>
						</li>
					}) 
				}
			</ul>
		);
	}
}
