import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import applicationReducer from './applicationReducer';
import recommendedUserReducer from './recommendedUserReducer';
import nav from './nav';
import ui from './uiReducer';
import postsReducer from './postsReducer';
import communities from './communitiesReducer';
import user from './userReducer';

export default combineReducers({
  account: accountReducer,
  application: applicationReducer,
  recommended: recommendedUserReducer,
  posts: postsReducer,
  nav,
  ui,
  communities,
  user,
});
