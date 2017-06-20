
import * as ActionTypes from '../consts/actionTypes';

export function authenticate(email, password) {
  return dispatch => 
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(user => dispatch(set_user(user)));
}


export function set_user(user){
  return {
    type: ActionTypes.SET_USER,
    user
  };
}