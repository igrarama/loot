import * as ActionTypes from '../consts/actionTypes';

export default function userReducer(state = 0, action) {
  switch (action.type) {
    case ActionTypes.LOAD_USER_DETAILS:
      return {
        ...state,
        details: action.dits
      }
    case ActionTypes.LOAD_USER_ITEMS:
      return {
        ...state,
        myItems: action.items
      }
    default:
      return state;
  }
}