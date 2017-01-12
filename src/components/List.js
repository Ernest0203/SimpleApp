import React, { PropTypes,Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as listActions from '../actions/ListActions.js';

class List extends Component {
	constructor(props) {
		super(props);
		this.selectItem = this.selectItem.bind(this);
	}

	selectItem(item) {
		this.props.listActions.selectItem(item);
	}

	render() {
		return (
			<ul className="list">
				{
					this.props.list.map(item => {
						return(
							<li className="list__item" key={item.id} data={item} onClick={() => this.selectItem(item)} >
								<img src={item.image}/>
								<h4>{item.name}</h4>
								<p>Цена: {item.price}$</p>
							</li>
						) 
					})
				}
			</ul>
		);
	}
};

function mapStateToProps (state) {
	return {
		list: state.list.data,
		item: state.list.selectedItem,
		open: state.list.popupIsOpen
	}
};

function mapDispatchToProps(dispatch) {
	return {
		listActions: bindActionCreators(listActions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
