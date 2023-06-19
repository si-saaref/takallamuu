export const actionType = {
	GET_ALL_TAGS: 'GET_ALL_TAGS',
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
			console.log(threads);
			dispatch();
		} catch (error) {
			console.log(error);
		}
	};
};
