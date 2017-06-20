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
		let { item, expanded, typeColor, typeIcon, onSelect } = this.props;

		return (
		   <div className='item-wrapper'>
		  	<div className={ 'item-logo selected ' + typeColor }>
		   		<i className={ 'fa fa-2x fa-' + typeIcon } aria-hidden="true"></i>
		   	</div>
				<div
					className={ 'item-card ' + typeColor }
					onClick={ onSelect.bind(this, true) }>
					<div className='basic-info'>
						<h4>{ item.productDef.name }</h4>
					</div>
					<div className={ 'item-info'}>
						<div className='basic-info'>
							<span>{ item.productDef.description }</span>
						</div>
						<div className='extra-info'>
							<span className='serial'>{ item.serialNumber ? item.serialNumber : '' }</span>
							<input className='checkbox' type='checkbox' disabled checked={ this.state.isInUse } />
						</div>
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
	typeIcon: PropTypes.string,
	onSelect: PropTypes.func
};

ItemCard.defaultProps = {
	typeColor: 'base',
	typeIcon: 'archive',
	expanded: false,
	onSelect: () => {}
}

export default ItemCard;