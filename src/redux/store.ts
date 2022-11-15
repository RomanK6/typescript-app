import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import commentsReducer from './comments-reducer';
import postsReducer from './posts-reducer';
import profileReducer from './profile-reduser';
import usersReducer from './user-reduser';
import { googleReducer } from './google-reducer';

let reducers = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    profile: profileReducer,
    comments: commentsReducer,
    googleReducer,
})
//=====================
export type redusersType = ReturnType<typeof reducers>

//для ts window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;