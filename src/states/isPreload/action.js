import apiServices from '../../utlis/apiServices';
import { setLogin } from '../authUser/action';
import { setErrorMessage } from '../error/action';

export const actionType = {
	IS_PRELOAD: 'IS_PRELOAD',
};

export const setIsPreload = (isPreload) => {
	return {
		type: actionType.IS_PRELOAD,
		payload: {
			isPreload,
		},
	};
};

export const asyncSetIsPreload = () => {
	return async (dispatch) => {
		try {
			const accessToken = apiServices.getFromStorage('accessToken');
			if (accessToken) {
				const authUser = await apiServices.getOwnProfile();
				dispatch(setLogin(authUser));
			}
		} catch (error) {
			dispatch(setErrorMessage(error.message));
			dispatch(setLogin(null));
		} finally {
			dispatch(setIsPreload(false));
		}
	};
};
