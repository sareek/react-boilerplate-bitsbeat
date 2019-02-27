import { fromJS } from 'immutable';
import superAdminDashboardReducer from '../reducer';

describe('superAdminDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(superAdminDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
