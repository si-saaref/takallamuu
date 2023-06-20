import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	GET_ALL_TAGS: 'GET_ALL_TAGS',
	SHOW_MORE_TAGS: 'SHOW_MORE_TAGS',
};

export const getAllTags = (tags) => {
	return {
		type: actionType.GET_ALL_TAGS,
		payload: {
			tags,
		},
	};
};

export const asyncGetAllTags = () => {
	return async (dispatch, getState) => {
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
			dispatch(setErrorMessage(error.message));
			console.log(error);
		}
	};
};

export const showMoreTags = (tags) => {
	return {
		type: actionType.GET_ALL_TAGS,
		payload: {
			tags,
		},
	};
};

export const asyncShowMoreTags = () => {
	return async (dispatch, getState) => {
		try {
			const { threads } = getState();
			const listTags = threads.map((item) => item?.category);
			dispatch(getAllTags(listTags));
		} catch (error) {
			dispatch(setErrorMessage(error.message));
			console.log(error);
		}
	};
};
