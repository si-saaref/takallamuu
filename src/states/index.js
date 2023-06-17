import { configureStore } from '@reduxjs/toolkit';
import threadsReducer from './threads/reducer';
import userReducer from './users/reducer';
import detailThreadReducer from './detailThread/reducer';
import commentThreadReducer from './comments/reducer';

export const store = configureStore({
	reducer: {
		threads: threadsReducer,
		users: userReducer,
		detailThread: detailThreadReducer,
		comment: commentThreadReducer,
	},
});
