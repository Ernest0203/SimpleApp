import React, { PropTypes,Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as listActions from '../actions/ListActions.js';

class List extends Component {
	constructor(props) {
		super(props);
		this.selectItem = this.selectItem.bind(this);
		this.sortItems = this.sortItems.bind(this);
	}

	selectItem(item) {
		this.props.listActions.selectItem(item);
	}

	sortItems(e) {
		let sortData = [...this.props.list];
		switch (e.target.value) {
			case 'priceUp':
				console.log(e.target.value)
				sortData.sort((itemA, itemB) => {
					return itemA.price - itemB.price;
				});
				this.props.listActions.priceUp(sortData);
				break;
			case 'priceDown':
				console.log(e.target.value)
				sortData.sort((itemA, itemB) => {
					return itemB.price - itemA.price;
				});
				this.props.listActions.priceDown(sortData);
				break;
			case 'aZ':
				sortData.sort((itemA, itemB) => {
					return itemA.name > itemB.name;
				});
				this.props.listActions.sortAz(sortData);
				break;
		}
	}

	render() {
		return (
			<div>
				<div className="sort">
					<span className="sort__title">Сортировать:</span>
					<select className="sort__options" onChange={this.sortItems}>
						<option value="priceUp">Цена (по возрастанию)</option>
						<option value="priceDown">Цена (по убыванию)</option>
						<option value="aZ">По алфавиту</option>
					</select>
				</div>
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
			</div>
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
