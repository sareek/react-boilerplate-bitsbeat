import { fromJS } from 'immutable';
import rolesContainerReducer from '../reducer';

describe('rolesContainerReducer', () => {
  it('returns the initial state', () => {
    expect(rolesContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
