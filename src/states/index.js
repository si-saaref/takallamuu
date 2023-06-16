import { configureStore } from '@reduxjs/toolkit';
import threadsReducer from './threads/reducer';

export const store = configureStore({
	reducer: {
		threads: threadsReducer,
	},
});
