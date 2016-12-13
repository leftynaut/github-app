import { FETCH_REPO, REMOVE_REPO } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_REPO:
      // return repo info
      return [action.payload.data, ...state];
    case REMOVE_REPO:
      // remove repo
      break;
    default:
      return state;
  }
}
