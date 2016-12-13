 import { combineReducers } from 'redux';
 import RepoReducer from './reducer_repo';
 import AuthorReducer from './reducer_author';

 const rootReducer = combineReducers({
   repo: RepoReducer,
   author: AuthorReducer
 });

 export default rootReducer;

 // const initialState = {
 //   message: `This message is coming from the Redux store. You'll want to
 //  remove this.`
 // };
 //
 // export default function reducer(state = initialState, action) {
 //   return state;
 // }
