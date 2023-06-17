import { actionType } from './action';

export default function commentThreadReducer(state = null, action = []) {
	const _action = {
		[actionType.ADD_COMMENT]: () => {
			return action.payload.comment;
		},
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}
