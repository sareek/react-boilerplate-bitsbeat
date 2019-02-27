/*
 *
 * SuperAdminDashboard actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const defaultAction = action(types.DEFAULT_ACTION);

export const defaultActionRequest = action(types.DEFAULT_ACTION_REQUEST, 'payload');
export const defaultActionSuccess = action(types.DEFAULT_ACTION_SUCCESS, 'response');
export const defaultActionFailure = action(types.DEFAULT_ACTION_FAILURE, 'error');

export const getUsers = action(types.GET_USERS, 'payload');
export const getUsersSuccess = action(types.GET_USERS_SUCCESS, 'response');
export const getUsersFailure = action(types.GET_USERS_FAILURE, 'error');
 
