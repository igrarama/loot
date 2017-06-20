/* jshint -W138 */

import { List } from 'immutable';
import * as actionTypes from '../consts/actionTypes';

export default function orderReducer(state = List(), action) {
    switch (action.type) {
        case actionTypes.LOAD_ORDERS:
            return List(action.orders);
        default:
            return state;
    }
}