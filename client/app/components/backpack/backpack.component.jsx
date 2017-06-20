import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemCard from '../itemCard/itemCard.component';
import './backpack.scss';

class Backpack extends Component {
	render() {
		return (
			<div className='backpack'>
				{
					this.props.items.map((item, i) => (
						<ItemCard
							key={ 'item_' + i }
							item={ item }
							expanded={ this.props.activeItem == item }
							onSelect={ this.props.onSelect.bind(this, item) }
							typeColor={ this.props.mapItemTypeColor(item.productDef.type.tags[0]) } />
					))
				}
				<div className='item-card'>
					<div className={ 'card-icon' }>
						<div className='icon-wrapper'>
							<i className='fa fa-4x fa-plus' />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Backpack.propTypes = {
	items: PropTypes.array.isRequired,
	mapItemTypeColor: PropTypes.func.isRequired,
	activeItem: PropTypes.object,
	onSelect: PropTypes.func
};

Backpack.defaultProps = {
	onSelect: () => {}
}

export default Backpack;