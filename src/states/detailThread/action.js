import apiServices from '../../utlis/apiServices';

export const actionType = {
	GET_DETAIL_THREAD: 'GET_DETAIL_THREAD',
};

export const getDetailThread = (detailThread) => {
	return {
		type: actionType.GET_DETAIL_THREAD,
		payload: {
			detailThread,
		},
	};
};

export const asyncGetDetailThread = ({ idThread }) => {
	return async (dispatch) => {
		try {
			const detailThread = await apiServices.getThreadDetail(idThread);
			dispatch(getDetailThread(detailThread));
		} catch (error) {
			console.log(error.message);
		}
	};
};
