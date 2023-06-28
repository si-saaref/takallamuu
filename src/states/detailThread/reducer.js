import { actionType } from './action';

export default function detailThreadReducer(state = {}, action = []) {
	const _action = {
		[actionType.GET_DETAIL_THREAD]: () => action.payload.detailThread,
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}
