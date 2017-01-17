import React, { Component } from 'react';

import List from '../containers/List.js';
import NavBar from '../containers/NavBar.js';
import InfoPopup from '../containers/InfoPopup.js';

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


