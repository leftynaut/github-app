import { FETCH_REPO, FETCH_COMMITS, REMOVE_REPO } from '../actions/index';

const INITIAL_STATE = { favorites: [], commits: null };
let bool = true;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_REPO:
      // return repo info
      state.favorites.forEach(favorite => {
        if (favorite.id === action.payload.data.id) {
          bool = false;
        }
      });
      if (!action.error && bool) {
        return { favorites: [...state.favorites, action.payload.data] };
      }
      bool = true;
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
