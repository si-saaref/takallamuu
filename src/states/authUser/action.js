import apiServices from '../../utlis/apiServices';

export const actionType = {
	REGISTER: 'REGISTER',
	LOGIN: 'LOGIN',
};

export const setRegister = (authUser) => {
	return {
		type: actionType.REGISTER,
		payload: {
			authUser,
		},
	};
};

export const asyncSetRegister = ({ name, email, password }) => {
	return async (dispatch) => {
		try {
			const authUser = await apiServices.setRegister({ email, name, password });
			// dispatch(asyncSignIn({ email, password }));
			dispatch(setRegister(authUser));
		} catch (error) {
			alert(error.message);
		}
	};
};

export const setLogin = (authUser) => {
	return {
		type: actionType.SIGN_IN,
		payload: {
			authUser,
		},
	};
};

export const asyncSetLogin = ({ email, password }) => {
	return async (dispatch) => {
		try {
			const token = await apiServices.login({ email, password });
			apiServices.putAccessToken(token);
			const authUser = await apiServices.getOwnProfile();
			dispatch(setLogin(authUser));
		} catch (error) {
			alert(error.message);
			console.log(error.message);
		}
	};
};
