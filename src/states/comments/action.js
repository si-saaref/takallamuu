import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	ADD_COMMENT: 'ADD_COMMENT',
};

export const addCommentThread = (comment) => {
	return {
		type: actionType.ADD_COMMENT,
		payload: {
			comment,
		},
	};
};

export const asyncAddCommentThread = ({ threadId, content }) => {
	return async (dispatch) => {
		try {
			const comment = await apiServices.addComment({ threadId, content });
			dispatch(addCommentThread(comment));
		} catch (error) {
			dispatch(setErrorMessage(error.message));
			console.log(error.message);
		}
	};
};
