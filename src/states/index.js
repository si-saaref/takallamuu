import { configureStore } from '@reduxjs/toolkit';
import threadsReducer from './threads/reducer';
import userReducer from './users/reducer';
import detailThreadReducer from './detailThread/reducer';
import commentThreadReducer from './comments/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import votesThreadReducer from './votes/reducer';

export const store = configureStore({
	reducer: {
		threads: threadsReducer,
		users: userReducer,
		detailThread: detailThreadReducer,
		comment: commentThreadReducer,
		authUser: authUserReducer,
		isPreload: isPreloadReducer,
		votes: votesThreadReducer,
	},
});
