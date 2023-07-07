import { hideLoading, showLoading } from 'react-redux-loading-bar';
import apiServices from '../../utlis/apiServices';
import { setLogin } from '../authUser/action';
import { setErrorMessage } from '../error/action';

export const actionType = {
	IS_PRELOAD: 'IS_PRELOAD',
};

export const setIsPreload = (isPreload) => ({
	type: actionType.IS_PRELOAD,
	payload: {
		isPreload,
	},
});

export const asyncSetIsPreload = () => async (dispatch) => {
	dispatch(showLoading());
	try {
		const accessToken = apiServices.getFromStorage('accessToken');
		if (accessToken) {
			const authUser = await apiServices.getOwnProfile();
			dispatch(setLogin(authUser));
		}
	} catch (error) {
		dispatch(setLogin(null));
		dispatch(
			setErrorMessage({
				message: error.message,
				actionType: actionType.IS_PRELOAD,
			})
		);
	} finally {
		dispatch(setIsPreload(false));
	}
	dispatch(hideLoading());
};
