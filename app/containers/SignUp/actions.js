/*
 *
 * SignUp actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const defaultAction = action(types.DEFAULT_ACTION);

export const defaultActionRequest = action(types.DEFAULT_ACTION_REQUEST, 'payload');
export const defaultActionSuccess = action(types.DEFAULT_ACTION_SUCCESS, 'response');
export const defaultActionFailure = action(types.DEFAULT_ACTION_FAILURE, 'error');


export const sendSignUpInfo = action(types.SIGNUP_DATA_POST, 'payload');
export const signUpSuccess = action(types.SIGNUP_SUCCESS, 'response');
export const signUpFailure = action(types.SIGNUP_FAILURE, 'error');
 
