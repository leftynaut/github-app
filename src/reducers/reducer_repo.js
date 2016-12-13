import { FETCH_REPO } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_REPO:
      // return repo info
      break;
    default:
      return state;
  }
}
