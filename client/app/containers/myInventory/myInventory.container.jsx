import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

import './myInventory.scss';
import Backpack from '../../components/backpack/backpack.component';

const itemsMock = [
	{
		id: 1,
		type: {
			title: 'tech'
		}
	},
	{
		id: 2,
		type: {
			title: 'army'
		}
	},
	{
		id: 3,
		type: {
			title: 'army'
		}
	},
	{
		id: 4,
		type: {
			title: 'tech'
		}
	},
	{
		id: 5,
		type: {
			title: 'tech'
		}
	},
	{
		id: 6,
		type: {
			title: 'army'
		}
	}
]

const generalTags = [
	{
		title: 'tech',
		name: 'מיחשוב'
	},
	{
		title: 'army',
		name: 'צבאי'
	}
]

class MyInventory extends Component {

	constructor(props) {
		super(props);
	}

	get activeItem(){
		let { match, myItems } = this.props;
		if(match.params.id){
			return myItems.find(item => item.id == match.params.id);
		}
	}

	mapItemTypeColor(type) {
		switch (type) {
			case 'tech':
				return 'blue';
			case 'army':
				return 'green';
			default:
				return 'base';
		}
	}

	selectItem(item, isSelected){
		if(isSelected){
			this.props.history.push(`/inventory/${item.id}`);
		} else {
			this.props.history.push(`/inventory`);
		}
	}
	
	render() {
		return (
			<div id='my-inventory-page'>
				<div className='inventory-options'>
					<div className='search'>
						<input placeholder={ 'חיפוש' } />
					</div>
					<div className='general-tags'>
						{
							generalTags.map((tag, i) => (
								<span
									key={ 'generalTag_' + i }
									className={ this.mapItemTypeColor(tag.title) }>
									{ tag.name }
								</span>
							))
						}
					</div>
				</div>
				<Backpack
					items={ this.props.myItems }
					activeItem={ this.activeItem }
					onSelect={ this.selectItem.bind(this) }
					mapItemTypeColor={ this.mapItemTypeColor.bind(this) } />
				<div className='footer'>
					
				</div>
			</div>
		);
	}
}

MyInventory.propTypes = {
	myItems: PropTypes.array.isRequired
};

let mapStateToProps = (store) => {
	// map to correct state
	return {
		myItems: store.myItems || itemsMock
	}
}

export default connect(mapStateToProps)(MyInventory);