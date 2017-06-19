import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemCard from '../itemCard/itemCard.component';

class Backpack extends Component {
	render() {
		return (
			<div className='backpack'>
				{
					this.props.items.map((item, i) => (
						<div className='card-wrapper' key={ 'item_' + i }>
							<ItemCard
								item={ item }
								expanded={ this.props.activeItem == item }
								onSelect={ this.props.onSelect.bind(this, item) }
								typeColor={ this.props.mapItemTypeColor(item.type.title) } />
						</div>
					))
				}
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