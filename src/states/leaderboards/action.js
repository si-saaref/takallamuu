import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	GET_ALL_LEADERBOARDS: 'GET_ALL_LEADERBOARDS',
};

export const getAllLeaderboards = (leaderboards) => {
	return {
		type: actionType.GET_ALL_LEADERBOARDS,
		payload: {
			leaderboards,
		},
	};
};

export const asyncGetAllLeaderboards = () => {
	return async (dispatch) => {
		try {
			const leaderboards = await apiServices.getAllLeaderboards();
			dispatch(getAllLeaderboards(leaderboards));
		} catch (error) {
			dispatch(setErrorMessage(error.message));
			console.log(error.message);
		}
	};
};
