import { fromJS } from 'immutable';
import imageUploadReducer from '../reducer';

describe('imageUploadReducer', () => {
  it('returns the initial state', () => {
    expect(imageUploadReducer(undefined, {})).toEqual(fromJS({}));
  });
});
