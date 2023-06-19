import { actionType } from './action';

export default function votesThreadReducer(state = null, action = []) {
	const _action = {
		[actionType.LIKE_THREAD]: () => {
			return action.payload.vote;
		},
		[actionType.DISLIKE_THREAD]: () => {
			return action.payload.vote;
		},
		[actionType.NEUTRAL_THREAD]: () => {
			return action.payload.vote;
		},
		[actionType.LIKE_COMMENT]: () => {
			return action.payload.vote;
		},
		[actionType.DISLIKE_COMMENT]: () => {
			return action.payload.vote;
		},
		[actionType.NEUTRAL_COMMENT]: () => {
			return action.payload.vote;
		},
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}
