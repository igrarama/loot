import * as ActionTypes from '../consts/actionTypes';

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
	return (dispatch) => fetch('/api/products?currentOwner=' + '5947e46f246a9a19f802c0eb')
		.then((response) => response.json())
		.then((items) => {
			return dispatch({
				type: ActionTypes.LOAD_USER_ITEMS,
				items
			})
		})
}