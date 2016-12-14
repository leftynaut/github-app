import { FETCH_REPO, FETCH_COMMITS, REMOVE_REPO } from '../actions/index';

const INITIAL_STATE = { favorites: [], commits: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_REPO:
      // return repo info
      if (!action.error) {
        return { favorites: [...state.favorites, action.payload.data] };
      }
      return { favorites: [...state.favorites] };
    case FETCH_COMMITS:
      // return commit info
      return { favorites: [...state.favorites], commits: action.payload.data };
    case REMOVE_REPO:
    // remove repo
      return { favorites: [...state.favorites.slice(0, action.payload),
        ...state.favorites.slice(action.payload + 1)]};
    default:
      return state;
  }
}
