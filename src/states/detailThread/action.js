import { hideLoading, showLoading } from 'react-redux-loading-bar';
import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	GET_DETAIL_THREAD: 'GET_DETAIL_THREAD',
};

export const getDetailThread = (detailThread) => ({
	type: actionType.GET_DETAIL_THREAD,
	payload: {
		detailThread,
	},
});

export const asyncGetDetailThread =
	({ idThread }) =>
	async (dispatch) => {
		dispatch(showLoading());
		try {
			const detailThread = await apiServices.getThreadDetail(idThread);
			dispatch(getDetailThread(detailThread));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.GET_DETAIL_THREAD,
				})
			);
		}
		dispatch(hideLoading());
	};
