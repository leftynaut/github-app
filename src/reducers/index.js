 import { combineReducers } from 'redux';
 import RepoReducer from './reducer_repo';

 const rootReducer = combineReducers({
   repo: RepoReducer
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
