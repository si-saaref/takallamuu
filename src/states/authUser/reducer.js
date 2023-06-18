import { actionType } from '../authUser/action';

export default function authUserReducer(state = null, action = {}) {
	const _action = {
		[actionType.REGISTER]: () => {
			return action.payload.authUser;
		},
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}
