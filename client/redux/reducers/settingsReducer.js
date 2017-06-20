import { Map } from 'immutable';

import * as ActionTypes from '../consts/actionTypes';

export default function settingsUser(state = Map(), action) {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCT_TYPES:
      return state.set('productTypes', action.types);
    case ActionTypes.LOAD_PRODUCT_TYPE_TAGS:
      return state.set('generalTags', action.tags);
    default:
      return state;
  }
}