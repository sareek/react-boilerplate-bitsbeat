/*
 *
 * SuperAdminDashboard reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

const initialState = fromJS({
  requesting: false,
  response: '',
  error: '',
  success: false,
  usersLoggedIn:[]
});

function superAdminDashboardReducer(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
    case types.DEFAULT_ACTION_REQUEST:
      return state;
    case types.DEFAULT_ACTION_SUCCESS:
      return state;
    case types.DEFAULT_ACTION_ERROR:
      return state;

    case types.GET_USERS:
     console.log('user get from server reducer')    
      return state;
    case types.GET_USERS_SUCCESS:
    console.log('user get success',action.response)    

     return state.merge({
      requesting: false,
      response: '',
      error: '',
      success: true,
      usersLoggedIn: action.response

    });   
        
    case types.GET_USERS_FAILURE:
      return state;

    default:
      return state;
  }
}

export default superAdminDashboardReducer;
