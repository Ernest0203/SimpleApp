import React, { Component } from 'react'

import List from './Components/List.js'
import NavBar from './Components/NavBar.js'

import './style.styl'
import data from './data.js'

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			data: data,
			cart: []
		}
		this.popupHide = this.popupHide.bind(this);
	}

	popupHide(e) {
		e.target.classList.remove('popup--show');
		document.body.style.overflow = '';
	}
	
	updateCart(data) {
		return (e) => {
			e.preventDefault();
			let newData = [...this.state.cart];
			newData.push(data);
			this.setState({
				cart: newData
			})
			console.log(this.state.cart)
		}
	}

	render() {
		return (
			<div className="container">
				<NavBar cart={this.state.cart} />
				<List data={this.state.data} update={this.updateCart.bind(this)}/>
				<div className="popup" onClick={this.popupHide}></div>
			</div>
		);
	}
}

export default App;
