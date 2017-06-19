import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './itemCard.scss';

import ItemModal from './itemModal/itemModal.component';

class ItemCard extends Component {
	constructor() {
		super();
		this.state = {
			isExpanded: false
		}
	}

	setIsExpanded = () => {
		let { isExpanded } = this.state;
		this.setState({ isExpanded: !isExpanded });
	}

	renderExpanded(){
		return (
			<div className='item-expanded-wrapper'>
				<div className='modal-bg'></div>
				<ItemModal
					item={ this.props.item }
					onClose={ this.setIsExpanded.bind(this) } />
			</div>
		)
	}
	
	render() {
		return (
		   <div className='item-wrapper'>
				<div
					className={ 'item-card ' + this.props.typeColor}
					onClick={ this.setIsExpanded.bind(this) }>
					<span>{ this.props.item.id }</span>
				</div>
				{ this.state.isExpanded ? this.renderExpanded() : null }
			</div>
		);
	}
}

ItemCard.propTypes = {
	item: PropTypes.object.isRequired,
	typeColor: PropTypes.string
};

ItemCard.defaultProps = {
	typeColor: 'base'
}

export default ItemCard;