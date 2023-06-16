export const actionType = {
	GET_ALL_USERS: 'GET_ALL_USERS',
};

export const getAllUsers = (users) => {
	return {
		type: actionType.GET_ALL_USERS,
		payload: {
			users,
		},
	};
};
