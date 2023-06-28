import { actionType } from './action';

export default function errorMessageReducer(state = null, action = {}) {
	const _action = {
		[actionType.SET_ERROR_MESSAGE]: () => action.payload.errorMessage,
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}
