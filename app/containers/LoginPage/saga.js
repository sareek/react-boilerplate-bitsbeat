import { take, takeLatest, fork, put, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import bitsbeatProject from 'utils/Api';
import { setUser, setToken } from 'containers/App/actions';
import * as types from './constants';
import * as actions from './actions';

function* redirectOnSuccess() {

  const action = yield take(types.LOGIN_SUCCESS);
  console.log('redirect on success',action.response)
  //const { response } = action;
 // const { token, userInfo } = response.data;
  localStorage.setItem('token', action.response.token);
 // yield put(setUser(userInfo));
 // yield put(setToken(token));

}

function* loginFlow(action) {
  const successWatcher = yield fork(redirectOnSuccess);
  const { data } = action;
  console.log('lll',data)
  yield fork(
    bitsbeatProject.post(
      'auth',
      actions.loginSuccess,
      actions.loginFailure,
      data
    ),
  );
  yield take([LOCATION_CHANGE, types.LOGIN_FAILURE]);
  yield cancel(successWatcher);
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(types.LOGIN_REQUEST, loginFlow);
}
