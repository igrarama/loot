import { Map } from 'immutable';

import * as ActionTypes from '../consts/actionTypes';

export default function settingsUser(state = Map(), action) {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCT_TYPES:
      return state.set('productTypes', action.types);
    case ActionTypes.LOAD_PRODUCT_TYPE_TAGS:
      return state.set('generalTags', action.tags);
    case ActionTypes.LOAD_PRODUCT_HISTORY:
      let items = state.get('items');
      let index = items.indexOf((item) => item._id == action.item._id);
      items[index] = action.item;
      return state.set('items', action.item)
    default:
      return state;
  }
}