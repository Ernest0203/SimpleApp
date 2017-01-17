import React, {Component} from 'react';

export default class ListComponent extends Component {
	render() {
		return (
			<div>
				<div className="sort">
					<span className="sort__title">Сортировать:</span>
					<select className="sort__options" onChange={this.props.listActions.sort}>
						<option value="SORT_PRICEUP">Цена (по возрастанию)</option>
						<option value="SORT_PRICEDOWN">Цена (по убыванию)</option>
						<option value="SORT_AZ">По алфавиту</option>
					</select>
				</div>
				<ul className="list">
					{
						this.props.list.map(item => {
							return(
								<li className="list__item" key={item.id} data={item} onClick={() => this.props.listActions.selectItem(item)} >
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
}

