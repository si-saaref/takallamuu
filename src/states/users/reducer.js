import { actionType } from './action';

export default function userReducer(state = [], action = {}) {
	const _action = {
		[actionType.GET_ALL_USERS]: () => action.payload.users,
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}
