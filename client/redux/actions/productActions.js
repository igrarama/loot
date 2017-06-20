import * as ActionTypes from '../consts/actionTypes';

export let fetchProductType = (productTypeId) => {
	return fetch('/api/productTypes/' + productTypeId)
		.then((response) => response.json())
		.then((productType) => productType);
};

export let fetchProductTypes = () => {
	return (dispatch) => fetch('/api/productTypes')
		.then((response) => response.json())
		.then((types) => dispatch({
			type: ActionTypes.LOAD_PRODUCT_TYPES,
			types
		}));
};

export let fetchProductTypeTags = () => {
	return (dispatch) => fetch('/api/productTypes/tags')
		.then((response) => response.json())
		.then((tags) => dispatch({
			type: ActionTypes.LOAD_PRODUCT_TYPE_TAGS,
			tags
		}));
};

export let fetchProductHistory = (product) => {
	return fetch('/api/transactions?product=' + product._id)
		.then((response) => response.json())
		.then((history) => history)
}

export let createNewTransaction = (sender, reciever, product) => {
	let body = {
		sender,
		reciever,
		product
	}
	
	let options = {
		method: 'POST',
		bosy: JSON.stringify(body)
	}
	return fetch('/api/transactions', options)
		.then((response) => response.ok)
}