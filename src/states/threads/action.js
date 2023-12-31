import { hideLoading, showLoading } from 'react-redux-loading-bar';
import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	GET_ALL_THREADS: 'GET_ALL_THREADS',
	ADD_NEW_THREAD: 'ADD_NEW_THREAD',
	SHOW_FILTERED_THREADS: 'SHOW_FILTERED_THREADS',
};

export const getAllThreads = (threads) => ({
	type: actionType.GET_ALL_THREADS,
	payload: {
		threads,
	},
});

export const asyncGetAllThreads = () => async (dispatch) => {
	dispatch(showLoading());
	try {
		const listThreads = await apiServices.getAllThreads();
		dispatch(getAllThreads(listThreads));
	} catch (error) {
		dispatch(
			setErrorMessage({
				message: error.message,
				actionType: actionType.GET_ALL_THREADS,
			})
		);
	}
	dispatch(hideLoading());
};

export const addNewThread = (thread) => ({
	type: actionType.ADD_NEW_THREAD,
	payload: {
		thread,
	},
});

export const asyncAddNewThread =
	({ title, body, category }) =>
	async (dispatch) => {
		dispatch(showLoading());
		try {
			const thread = await apiServices.createThread({ title, body, category });
			dispatch(addNewThread(thread));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.ADD_NEW_THREAD,
				})
			);
		}
		dispatch(hideLoading());
	};

export const showFilteredThreads = (threads) => ({
	type: actionType.SHOW_FILTERED_THREADS,
	payload: {
		threads,
	},
});

export const asyncShowFilteredThreads =
	({ category }) =>
	async (dispatch, getState) => {
		dispatch(showLoading());
		try {
			const { threads } = getState();
			const filteredThreads = threads.filter((item) => item.category === category);
			dispatch(showFilteredThreads(filteredThreads));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.SHOW_FILTERED_THREADS,
				})
			);
		}
		dispatch(hideLoading());
	};
