
import { createSelector } from 'reselect';

/**
 * Direct selector to the authContainer state domain
 */
const selectDomain = (state) => state.get('authContainer');

/**
 * Other specific selectors
 */
const makeSelectSuccess = () => createSelector(selectDomain, (state) => state.get('success'));
const makeSelectResponse = () => createSelector(selectDomain, (state) => state.get('response'));
const makeSelectError = () => createSelector(selectDomain, (state) => state.get('error'));
const makeSelectRequesting = () => createSelector(selectDomain, (state) => state.get('requesting'));

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectRequesting,
  makeSelectError,
};
