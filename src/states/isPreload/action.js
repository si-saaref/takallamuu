import apiServices from '../../utlis/apiServices';
import { setLogin } from '../authUser/action';

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
			const authUser = await apiServices.getOwnProfile();
			dispatch(setLogin(authUser));
		} catch (error) {
			dispatch(setLogin(null));
		} finally {
			dispatch(setIsPreload(false));
		}
	};
};
