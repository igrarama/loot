import * as actionTypes from '../consts/actionTypes';

export function fetchOrdersRequest(){
    return (dispatch) => {
        return fetch("/api/orders")
                .then(res => res).then((res) => {
                    dispatch({
                        type: actionTypes.GET_ORDERS,
                        orders: res
                    });
        })
    }
}

function confirmOrder(item, isSuccess){

}