import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './itemCard.scss';

import ItemModal from './itemModal/itemModal.component';

class ItemCard extends Component {

	renderExpanded(){
		return (
			<div className='item-expanded-wrapper'>
				<div className='modal-bg'></div>
				<ItemModal
					item={ this.props.item }
					onClose={ this.props.onSelect.bind(this, false) } />
			</div>
		)
	}
	
	render() {
		let { item, expanded, typeColor, onSelect } = this.props;

		return (
		   <div className='item-wrapper'>
				<div
					className={ 'item-card ' + typeColor}
					onClick={ onSelect.bind(this, true) }>
					<span>{ item.id }</span>
				</div>
				{ expanded ? this.renderExpanded() : null }
			</div>
		);
	}
}

ItemCard.propTypes = {
	item: PropTypes.object.isRequired,
	expanded: PropTypes.bool,
	typeColor: PropTypes.string,
	onSelect: PropTypes.func
};

ItemCard.defaultProps = {
	typeColor: 'base',
	expanded: false,
	onSelect: () => {}
}

export default ItemCard;