 import { combineReducers } from 'redux';
 import client from '../apolloClient';

 import RepoReducer from './reducer_repo';
 import AuthorReducer from './reducer_author';

 const rootReducer = combineReducers({
   repo: RepoReducer,
   author: AuthorReducer,
   apollo: client.reducer()
 });

 export default rootReducer;
