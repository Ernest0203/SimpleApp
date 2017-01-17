import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as listActions from '../actions/ListActions.js';
import ListComponent from '../components/ListComponent.jsx'

const sortItems = (data, filter, state) => {
	let sortData = [];
	switch (filter) {
		case 'SORT_PRICEUP':
			sortData = data.sort((itemA, itemB) => {
				return itemA.price - itemB.price;
			});
			return sortData
		case 'SORT_PRICEDOWN':
			sortData = data.sort((itemA, itemB) => {
				return itemB.price - itemA.price;
			});
			return sortData
		case 'SORT_AZ':
			sortData = data.sort((itemA, itemB) => {
				return itemA.name > itemB.name;
			});
			return sortData
		default:
			return data
	}
}

const mapStateToProps = (state) => {
	return {
		list: sortItems(state.list.data, state.list.filter, state),
		filter: state.list.filter
	}
};

function mapDispatchToProps(dispatch) {
	return {
		listActions: bindActionCreators(listActions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)
