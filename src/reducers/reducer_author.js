import { FETCH_AUTHOR } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_AUTHOR:
      // return author info
      return { profile: action.payload.data };
    default:
      return state;
  }
}
