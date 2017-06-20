import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './itemCard.scss';

import ItemModal from './itemModal/itemModal.component';

class ItemCard extends Component {
	constructor(props) {
		super(props);
	}

	renderExpanded(){
		return (
			<div className='item-expanded-wrapper'>
				<div className='modal-bg'></div>
				<ItemModal
					item={ this.props.item }
					onClose={ this.props.onSelect.bind(this, false) }
					isInUse={ this.state.isInUse }
					toggleIsInUse={ this.toggleIsInUse.bind(this) }
					typeColor={ this.props.typeColor } />
			</div>
		)
	}
	
	toggleIsInUse = () => {
		this.setState({ isInUse: !this.state.isInUse });
	}
	
	componentWillMount() {
		this.setState({ isInUse: this.props.item.isInUse });
	}

	render() {
		let { item, expanded, typeColor, onSelect } = this.props;

		return (
		   <div className='item-card'>
				<div
					className={ 'item-card ' + typeColor}
					onClick={ onSelect.bind(this, true) }>
					<div className='basic-info'>
						<h4>{ item.productDef.name }</h4>
						<span>{ item.productDef.description }</span>
					</div>
					<div className='extra-info'>
						<span className='serial'>{ item.serialNumber ? item.serialNumber : '' }</span>
						<input className='checkbox' type='checkbox' disabled checked={ this.state.isInUse } />
					</div>
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