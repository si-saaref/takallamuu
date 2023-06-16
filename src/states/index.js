import { configureStore } from '@reduxjs/toolkit';
import threadsReducer from './threads/reducer';
import userReducer from './users/reducer';

export const store = configureStore({
	reducer: {
		threads: threadsReducer,
		users: userReducer,
	},
});
