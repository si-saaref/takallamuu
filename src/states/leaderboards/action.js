import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	GET_ALL_LEADERBOARDS: 'GET_ALL_LEADERBOARDS',
};

export const getAllLeaderboards = (leaderboards) => ({
	type: actionType.GET_ALL_LEADERBOARDS,
	payload: {
		leaderboards,
	},
});

export const asyncGetAllLeaderboards = () => async (dispatch) => {
	try {
		const leaderboards = await apiServices.getAllLeaderboards();
		dispatch(getAllLeaderboards(leaderboards));
	} catch (error) {
		dispatch(
			setErrorMessage({
				message: error.message,
				actionType: actionType.GET_ALL_LEADERBOARDS,
			})
		);
	}
};
