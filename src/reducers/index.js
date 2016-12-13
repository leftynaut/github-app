 import { combineReducers } from 'redux';
 import RepoReducer from './reducer_repo';
 import AuthorReducer from './reducer_author';

 const rootReducer = combineReducers({
   repo: RepoReducer,
   author: AuthorReducer
 });

 export default rootReducer;
