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
	return (dispatch, getState) => {
		try {
			const { threads } = getState();
			const listTags = threads.map((item) => item?.category).slice(0, 7);
			console.log('list hread +>', listTags);
			dispatch(getAllTags(listTags));
		} catch (error) {
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
	return (dispatch, getState) => {
		try {
			const { threads } = getState();
			const listTags = threads.map((item) => item?.category);
			dispatch(getAllTags(listTags));
		} catch (error) {
			console.log(error);
		}
	};
};
