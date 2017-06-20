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
						<div className='card-wrapper' key={ 'item_' + i }>
							<ItemCard
								item={ item }
								expanded={ this.props.activeItem == item }
								onSelect={ this.props.onSelect.bind(this, item) }
								typeColor={ this.props.mapItemTypeColor(item.productDef.type.tags[0]) }
								typeIcon={ this.props.mapItemTypeIcon(item.productDef.type.tags[0]) } />
						</div>
					))
				}
                <div className='card-wrapper'>
                    <div className='item-wrapper' onClick={()=>(this.props.history.push(`/myCatalog`))}>
                        <div className={ 'item-card add blue'}>
                            <div className='request-item'>
                                <i className='fa fa-plus' />
                            </div>
                        </div>
						{ null }
                    </div>
                </div>
			</div>
		);
	}
}

Backpack.propTypes = {
	items: PropTypes.array.isRequired,
	mapItemTypeColor: PropTypes.func.isRequired,
  mapItemTypeIcon: PropTypes.func.isRequired,
	activeItem: PropTypes.object,
	onSelect: PropTypes.func
};

Backpack.defaultProps = {
	onSelect: () => {}
}

export default Backpack;