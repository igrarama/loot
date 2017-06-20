import _ from 'lodash';
import * as ActionTypes from '../consts/actionTypes';
import { fetchProductType } from './productActions';

export function fetchUser() {
  return dispatch => 
    fetch('/auth/me', { credentials: 'include' })
      .then(res => res.json())
      .then(user => {
        if(user._id)
          dispatch(populate_user(user));
        else
          dispatch(set_user(user));
      });
}

function populate_user(user){
  return dispatch => fetchUserItems(user._id)
    .then(items => {
      dispatch(set_user(user));
      dispatch({ type: ActionTypes.LOAD_USER_ITEMS, items });
    });
}

export function searchPeople(query) {
  const firstNameQuery = fetch('/api/people?firstName=' + query)
    .then((response) => response.json());
  const lastNameQuery = fetch('/api/people?lastName=' + query)
    .then((response) => response.json());
  return Promise.all([firstNameQuery, lastNameQuery])
    .then((results) => {
      let res = _.concat(...results)
      console.log(res)
      return res;
    })
}

export function fetchUserItems(userId) {
  return fetch('/api/products?currentOwner=' + userId)
    .then((response) => response.json())
    .then(items => 
      items.map(item => 
        fetchProductType(item.productDef.type)
        .then(type => item.productDef.type = type)
        .then(() => item)
      )
    ).then(promises => Promise.all(promises));
}


export function set_user(user){
  return {
    type: ActionTypes.SET_USER,
    user
  };
}