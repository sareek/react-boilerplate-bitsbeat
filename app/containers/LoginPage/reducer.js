/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  requesting: false,
  success: false,
  response: '',
  error: '',
});

function loginPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    console.log('login reducer request')
      return state.merge({
        requesting: true,
        success: false,
        error: '',
      });
    case types.LOGIN_FAILURE:
    console.log('login reducer failure')
      return state.merge({
        requesting: false,
        success: false,
        error: action.error.message,
      });
    case types.LOGIN_SUCCESS:
    console.log('login reducer success', action.response)
      return state.merge({
        requesting: false,
        success: true,
      });
    default:
      return state;
  }
}

export default loginPageReducer;
