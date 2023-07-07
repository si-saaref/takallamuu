import { actionType } from './action';

export default function votesThreadReducer(state = null, action = []) {
	const _action = {
		[actionType.LIKE_THREAD]: () => action.payload.vote,
		[actionType.DISLIKE_THREAD]: () => action.payload.vote,
		[actionType.NEUTRAL_THREAD]: () => action.payload.vote,
		[actionType.LIKE_COMMENT]: () => action.payload.vote,
		[actionType.DISLIKE_COMMENT]: () => action.payload.vote,
		[actionType.NEUTRAL_COMMENT]: () => action.payload.vote,
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}
