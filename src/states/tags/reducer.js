import { actionType } from './action';

export default function tagsReducer(state = [], action = {}) {
	const _action = {
		[actionType.GET_ALL_TAGS]: () => {
			return action.payload.tags;
		},
		[actionType.SHOW_MORE_TAGS]: () => {
			return action.payload.tags;
		},
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}
