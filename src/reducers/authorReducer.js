import * as types from '../actions/actionTypes';
import initialState from './initialState';
import authors from './authorReducer';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
