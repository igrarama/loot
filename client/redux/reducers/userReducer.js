/* jshint -W138 */

import * as ActionTypes from '../consts/actionTypes';
import { Map } from 'immutable';

export default (state = Map(), action) => {
  switch(action.type){
    case ActionTypes.SET_USER:
      return state.set('current', action.user);
    default:
      return state;
  }
};
