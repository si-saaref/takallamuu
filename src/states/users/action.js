import apiServices from '../../utlis/apiServices';

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

export const asyncGetAllUsers = () => {
	return async (dispatch) => {
		try {
			const listUsers = await apiServices.getAllUsers();
			dispatch(getAllUsers(listUsers));
		} catch (error) {
			console.log(error.message);
		}
	};
};
