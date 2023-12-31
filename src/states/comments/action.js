import { hideLoading, showLoading } from 'react-redux-loading-bar';
import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	ADD_COMMENT: 'ADD_COMMENT',
};

export const addCommentThread = (comment) => ({
	type: actionType.ADD_COMMENT,
	payload: {
		comment,
	},
});

export const asyncAddCommentThread =
	({ threadId, content }) =>
	async (dispatch) => {
		dispatch(showLoading());
		try {
			const comment = await apiServices.addComment({ threadId, content });
			dispatch(addCommentThread(comment));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.ADD_COMMENT,
				})
			);
		}
		dispatch(hideLoading());
	};
