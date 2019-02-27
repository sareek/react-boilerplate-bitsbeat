
import { createSelector } from 'reselect';

/**
 * Direct selector to the superAdminDashboard state domain
 */
const selectDomain = (state) => state.get('superAdminDashboard');

/**
 * Other specific selectors
 */
const makeSelectSuccess = () => createSelector(selectDomain, (state) => state.get('success'));
const makeSelectResponse = () => createSelector(selectDomain, (state) => state.get('response'));
const makeSelectError = () => createSelector(selectDomain, (state) => state.get('error'));
const makeSelectRequesting = () => createSelector(selectDomain, (state) => state.get('requesting'));


const makeSelectAllUserResult = () => createSelector(selectDomain, (state) => state.get('usersLoggedIn'));
//const makeSelectAidTitleResult = () => createSelector(selectDomain, (state) => state.get('titleList'));

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectRequesting,
  makeSelectError,
  makeSelectAllUserResult
};
