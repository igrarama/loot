import * as actionTypes from '../consts/actionTypes';

export function fetchOrders(customerId){
	return (dispatch) =>
		fetch(`/api/orders?customer=${customerId}`)
				.then(res => res.json())
				.then(orders => dispatch(load_orders(orders)));
}

function load_orders(orders){
	return {
		type: actionTypes.LOAD_ORDERS,
		orders
	};
}