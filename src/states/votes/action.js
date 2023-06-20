import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';

export const actionType = {
	LIKE_THREAD: 'LIKE_THREAD',
	DISLIKE_THREAD: 'DISLIKE_THREAD',
	NEUTRAL_THREAD: 'NEUTRAL_THREAD',
	LIKE_COMMENT: 'LIKE_COMMENT',
	DISLIKE_COMMENT: 'DISLIKE_COMMENT',
	NEUTRAL_COMMENT: 'NEUTRAL_COMMENT',
};

export const likeThread = (vote) => {
	return {
		type: actionType.LIKE_THREAD,
		payload: {
			vote,
		},
	};
};

export const asyncLikeThread = ({ threadId }) => {
	return async (dispatch) => {
		try {
			const vote = await apiServices.likeThread({ threadId });
			dispatch(likeThread(vote));
		} catch (error) {
			dispatch(setErrorMessage(error.message));
			console.log(error.message);
		}
	};
};

export const dislikeThread = (vote) => {
	return {
		type: actionType.DISLIKE_THREAD,
		payload: {
			vote,
		},
	};
};

export const asyncDislikeThread = ({ threadId }) => {
	return async (dispatch) => {
		try {
			const vote = await apiServices.dislikeThread({ threadId });
			dispatch(dislikeThread(vote));
		} catch (error) {
			dispatch(setErrorMessage(error.message));
			console.log(error.message);
		}
	};
};

export const neutralThread = (vote) => {
	return {
		type: actionType.NEUTRAL_THREAD,
		payload: {
			vote,
		},
	};
};

export const asyncNeutralThread = ({ threadId }) => {
	return async (dispatch) => {
		try {
			const vote = await apiServices.neutralThread({ threadId });
			dispatch(neutralThread(vote));
		} catch (error) {
			dispatch(setErrorMessage(error.message));
			console.log(error.message);
		}
	};
};

export const likeComment = (vote) => {
	return {
		type: actionType.LIKE_COMMENT,
		payload: {
			vote,
		},
	};
};

export const asyncLikeComment = ({ threadId, commentId }) => {
	return async (dispatch) => {
		try {
			const vote = await apiServices.likeComment({ threadId, commentId });
			dispatch(likeComment(vote));
		} catch (error) {
			dispatch(setErrorMessage(error.message));
			console.log(error.message);
		}
	};
};

export const dislikeComment = (vote) => {
	return {
		type: actionType.DISLIKE_COMMENT,
		payload: {
			vote,
		},
	};
};

export const asyncDislikeComment = ({ threadId, commentId }) => {
	return async (dispatch) => {
		try {
			const vote = await apiServices.dislikeComment({ threadId, commentId });
			dispatch(dislikeComment(vote));
		} catch (error) {
			dispatch(setErrorMessage(error.message));
			console.log(error.message);
		}
	};
};

export const neutralComment = (vote) => {
	return {
		type: actionType.NEUTRAL_COMMENT,
		payload: {
			vote,
		},
	};
};

export const asyncNeutralComment = ({ threadId, commentId }) => {
	return async (dispatch) => {
		try {
			const vote = await apiServices.neutralComment({ threadId, commentId });
			dispatch(neutralComment(vote));
		} catch (error) {
			dispatch(setErrorMessage(error.message));
			console.log(error.message);
		}
	};
};
