import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	REGISTER: 'REGISTER',
	LOGIN: 'LOGIN',
	LOGOUT: 'LOGOUT',
};

export const setLogin = (authUser) => ({
	type: actionType.LOGIN,
	payload: {
		authUser,
	},
});

export const asyncSetLogin =
	({ email, password }) =>
	async (dispatch) => {
		try {
			const token = await apiServices.login({ email, password });
			apiServices.putToStorage({ keyName: 'accessToken', item: token });
			const authUser = await apiServices.getOwnProfile();
			dispatch(setLogin(authUser));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.LOGIN,
				})
			);
		}
	};

export const setRegister = (authUser) => ({
	type: actionType.REGISTER,
	payload: {
		authUser,
	},
});

export const asyncSetRegister =
	({ name, email, password }) =>
	async (dispatch) => {
		try {
			const authUser = await apiServices.register({ email, name, password });
			dispatch(asyncSetLogin({ email, password }));
			dispatch(setRegister(authUser));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.REGISTER,
				})
			);
		}
	};

export const setLogout = () => ({
	type: actionType.LOGOUT,
	payload: {
		authUser: null,
	},
});

export const asyncSetLogout = () => async (dispatch) => {
	try {
		apiServices.removeFromStorage('accessToken');
		dispatch(setLogout());
	} catch (error) {
		dispatch(
			setErrorMessage({
				message: error.message,
				actionType: actionType.LOGOUT,
			})
		);
	}
};
