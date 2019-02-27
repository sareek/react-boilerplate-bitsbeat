import { fromJS } from 'immutable';
import customDashboardReducer from '../reducer';

describe('customDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(customDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
