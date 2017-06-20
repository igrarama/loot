import * as ActionTypes from '../consts/actionTypes';

export default function settingsUser(state = 0, action) {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCT_TYPES:
      return {
        ...state,
        productTypes: action.types
      }
    case ActionTypes.LOAD_PRODUCT_TYPE_TAGS:
      return {
        ...state,
        generalTags: tags
      }
    default:
      return state;
  }
}