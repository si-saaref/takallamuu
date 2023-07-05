import { hideLoading, showLoading } from 'react-redux-loading-bar';
import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	GET_ALL_TAGS: 'GET_ALL_TAGS',
	SHOW_MORE_TAGS: 'SHOW_MORE_TAGS',
};

export const getAllTags = (tags) => ({
	type: actionType.GET_ALL_TAGS,
	payload: {
		tags,
	},
});

export const asyncGetAllTags = () => async (dispatch, getState) => {
	dispatch(showLoading());
	try {
		const { threads } = getState();
		const tagsFromStorage = apiServices.getFromStorage('listTags') || [];
		const listTags =
			tagsFromStorage?.length === 0 || threads.length !== tagsFromStorage?.length
				? [...new Set(threads.map((item) => item?.category))].slice(0, 7)
				: tagsFromStorage;

		apiServices.putToStorage({ keyName: 'listTags', item: listTags });

		dispatch(getAllTags(listTags));
	} catch (error) {
		dispatch(
			setErrorMessage({
				message: error.message,
				actionType: actionType.GET_ALL_TAGS,
			})
		);
	}
	dispatch(hideLoading());
};

export const showMoreTags = (tags) => ({
	type: actionType.GET_ALL_TAGS,
	payload: {
		tags,
	},
});

export const asyncShowMoreTags = () => async (dispatch, getState) => {
	dispatch(showLoading());
	try {
		const { threads } = getState();
		const listTags = threads.map((item) => item?.category);
		dispatch(getAllTags(listTags));
	} catch (error) {
		dispatch(
			setErrorMessage({
				message: error.message,
				actionType: actionType.SHOW_MORE_TAGS,
			})
		);
	}
	dispatch(hideLoading());
};
