import { actionType } from './action';

export default function authUserReducer(state = null, action = {}) {
	const _action = {
		[actionType.REGISTER]: () => action.payload.authUser,
		[actionType.LOGIN]: () => action.payload.authUser,
		[actionType.LOGOUT]: () => action.payload.authUser,
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}
