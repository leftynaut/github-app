import { FETCH_AUTHOR } from '../actions/index';

const INITIAL_STATE = { profile: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_AUTHOR:
      // return author info
      return { profile: action.payload.data };
    default:
      return state;
  }
}
