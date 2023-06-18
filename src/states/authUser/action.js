import apiServices from '../../utlis/apiServices';

export const actionType = {
	REGISTER: 'REGISTER',
	LOGIN: 'LOGIN',
	LOGOUT: 'LOGOUT',
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
			dispatch(asyncSetLogin({ email, password }));
			dispatch(setRegister(authUser));
		} catch (error) {
			alert(error.message);
		}
	};
};

export const setLogin = (authUser) => {
	return {
		type: actionType.LOGIN,
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

export const setLogout = () => {
	return {
		type: actionType.LOGOUT,
		payload: {
			authUser: null,
		},
	};
};

export const asyncSetLogout = () => {
	return async (dispatch) => {
		try {
			apiServices.removeAccessToken();
			dispatch(setLogout());
		} catch (error) {
			alert(error.message);
		}
	};
};
