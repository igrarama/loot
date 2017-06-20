import * as actionTypes from '../consts/actionTypes';

export default function orderReducer(state = 0, action) {
    switch (action.type) {
        case actionTypes.GET_ORDERS:
            return action.orders;
        default:
            return state;
    }
}