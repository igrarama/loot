/* jshint -W138 */

import * as ActionTypes from '../consts/actionTypes';
import { Map } from 'immutable';

export default (state = Map(), action) => {
  switch(action.type){
    case ActionTypes.SET_USER:
      return state.set('current', action.user);
    case ActionTypes.SEARCH_USERS:
      return state.set('peopleResults', action.people);
    case ActionTypes.LOAD_USER_DETAILS:
      return state.set('details', action.dits);
    case ActionTypes.LOAD_USER_ITEMS:
      return state.set('items', action.items);
    default:
      return state;
  }
};
