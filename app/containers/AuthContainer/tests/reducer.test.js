import { fromJS } from 'immutable';
import authContainerReducer from '../reducer';

describe('authContainerReducer', () => {
  it('returns the initial state', () => {
    expect(authContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
