import * as ActionTypes from '../consts/actionTypes';
import { fetchProductType } from './productActions';

// TODO: get user id (auth)
export let fetchUserDetails = (userId) => {
	return (dispatch) => fetch('/api/people/' + userId)
		.then((response) => response.json())
		.then((dits) => {
			return dispatch({
				type: ActionTypes.LOAD_USER_DETAILS,
				dits
			})
		})
}

// get user inventory
export let fetchUserItems = (userId) => {
	return (dispatch) => fetch('/api/products?currentOwner=' + '5948366558df473e9cab1c5c')
		.then((response) => response.json())
		.then((items) => {
			let fullItems = [];
			return new Promise((resolve, reject) => {
				items.map((item) => {
					let newItem = {...item};
					fetchProductType(newItem.productDef.type)
						.then((type) => {
							newItem.productDef.type = type;
							fullItems.push(newItem);
							if (fullItems.length == items.length)
								resolve(fullItems);
						});
				})
			})
			.then((items) => {
				return items;
			})
		})
		.then((items) => {
			return dispatch({
				type: ActionTypes.LOAD_USER_ITEMS,
				items
			})
		})
}