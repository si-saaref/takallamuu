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

export const likeThread = (vote) => ({
	type: actionType.LIKE_THREAD,
	payload: {
		vote,
	},
});

export const asyncLikeThread =
	({ threadId }) =>
	async (dispatch) => {
		try {
			const vote = await apiServices.likeThread({ threadId });
			dispatch(likeThread(vote));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.LIKE_THREAD,
				})
			);
		}
	};

export const dislikeThread = (vote) => ({
	type: actionType.DISLIKE_THREAD,
	payload: {
		vote,
	},
});

export const asyncDislikeThread =
	({ threadId }) =>
	async (dispatch) => {
		try {
			const vote = await apiServices.dislikeThread({ threadId });
			dispatch(dislikeThread(vote));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.DISLIKE_THREAD,
				})
			);
		}
	};

export const neutralThread = (vote) => ({
	type: actionType.NEUTRAL_THREAD,
	payload: {
		vote,
	},
});

export const asyncNeutralThread =
	({ threadId }) =>
	async (dispatch) => {
		try {
			const vote = await apiServices.neutralThread({ threadId });
			dispatch(neutralThread(vote));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.NEUTRAL_THREAD,
				})
			);
		}
	};

export const likeComment = (vote) => ({
	type: actionType.LIKE_COMMENT,
	payload: {
		vote,
	},
});

export const asyncLikeComment =
	({ threadId, commentId }) =>
	async (dispatch) => {
		try {
			const vote = await apiServices.likeComment({ threadId, commentId });
			dispatch(likeComment(vote));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.LIKE_COMMENT,
				})
			);
		}
	};

export const dislikeComment = (vote) => ({
	type: actionType.DISLIKE_COMMENT,
	payload: {
		vote,
	},
});

export const asyncDislikeComment =
	({ threadId, commentId }) =>
	async (dispatch) => {
		try {
			const vote = await apiServices.dislikeComment({ threadId, commentId });
			dispatch(dislikeComment(vote));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.DISLIKE_COMMENT,
				})
			);
		}
	};

export const neutralComment = (vote) => ({
	type: actionType.NEUTRAL_COMMENT,
	payload: {
		vote,
	},
});

export const asyncNeutralComment =
	({ threadId, commentId }) =>
	async (dispatch) => {
		try {
			const vote = await apiServices.neutralComment({ threadId, commentId });
			dispatch(neutralComment(vote));
		} catch (error) {
			dispatch(
				setErrorMessage({
					message: error.message,
					actionType: actionType.NEUTRAL_COMMENT,
				})
			);
		}
	};
