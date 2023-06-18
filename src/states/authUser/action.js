import apiServices from '../../utlis/apiServices';

export const actionType = {
	REGISTER: 'REGISTER',
};

export const register = (authUser) => {
	return {
		type: actionType.REGISTER,
		payload: {
			authUser,
		},
	};
};

export const asyncRegister = ({ name, email, password }) => {
	return async (dispatch) => {
		try {
			const authUser = await apiServices.register({ email, name, password });
			// dispatch(asyncSignIn({ email, password }));
			dispatch(register(authUser));
		} catch (error) {
			alert(error.message);
		}
	};
};
