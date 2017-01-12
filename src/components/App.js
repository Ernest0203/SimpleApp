import React, { Component } from 'react';

import List from './List.js';
import NavBar from './NavBar.js';
import InfoPopup from './InfoPopup.js';

import '../style.styl';

export default class App extends Component {

	render() {
		return (
			<div className="container">
				<NavBar/>
				<List/>
				<InfoPopup/>
			</div>
		);
	}
};


