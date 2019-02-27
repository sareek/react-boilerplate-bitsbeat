/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

const initialState = fromJS({
  requesting: false,
  response: '',
  error: '',
  success: false
});

function signUpReducer(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
    case types.DEFAULT_ACTION_REQUEST:
      return state;
    case types.DEFAULT_ACTION_SUCCESS:
      return state;
    case types.DEFAULT_ACTION_ERROR:
      return state;

   
    case types.SIGNUP_DATA_POST:
    console.log('sign up data post')
      return state;
    case types.SIGNUP_SUCCESS:
    console.log('sign up success')
      return state;
    case types.SIGNUP_FAILURE:
    console.log('sign up failure')
      return state;
    default:
      return state;
  }
}

export default signUpReducer;
