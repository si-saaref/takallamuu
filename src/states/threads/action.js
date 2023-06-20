import apiServices from '../../utlis/apiServices';

export const actionType = {
	GET_ALL_THREADS: 'GET_ALL_THREADS',
	ADD_NEW_THREAD: 'ADD_NEW_THREAD',
	SHOW_FILTERED_THREADS: 'SHOW_FILTERED_THREADS',
};

export const getAllThreads = (threads) => {
	return {
		type: actionType.GET_ALL_THREADS,
		payload: {
			threads,
		},
	};
};

export const asyncGetAllThreads = () => {
	return async (dispatch) => {
		try {
			const listThreads = await apiServices.getAllThreads();
			dispatch(getAllThreads(listThreads));
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const addNewThread = (thread) => {
	return {
		type: actionType.ADD_NEW_THREAD,
		payload: {
			thread,
		},
	};
};

export const asyncAddNewThread = ({ title, body, category }) => {
	return async (dispatch) => {
		try {
			const thread = await apiServices.createThread({ title, body, category });
			dispatch(addNewThread(thread));
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const showFilteredThreads = (threads) => {
	return {
		type: actionType.SHOW_FILTERED_THREADS,
		payload: {
			threads,
		},
	};
};

export const asyncShowFilteredThreads = ({ category }) => {
	return async (dispatch, getState) => {
		try {
			const { threads } = getState();
			const filteredThreads = threads.filter((item) => item.category === category);
			dispatch(showFilteredThreads(filteredThreads));
		} catch (error) {
			console.log(error);
		}
	};
};
