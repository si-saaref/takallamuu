import { hideLoading, showLoading } from 'react-redux-loading-bar';
import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	GET_ALL_USERS: 'GET_ALL_USERS',
};

export const getAllUsers = (users) => ({
	type: actionType.GET_ALL_USERS,
	payload: {
		users,
	},
});

export const asyncGetAllUsers = () => async (dispatch) => {
	dispatch(showLoading());
	try {
		const listUsers = await apiServices.getAllUsers();
		dispatch(getAllUsers(listUsers));
	} catch (error) {
		dispatch(
			setErrorMessage({
				message: error.message,
				actionType: actionType.GET_ALL_USERS,
			})
		);
	}
	dispatch(hideLoading());
};
