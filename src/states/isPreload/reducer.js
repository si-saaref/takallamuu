import { actionType } from './action';

export default function isPreloadReducer(state = true, action = {}) {
	const _action = {
		[actionType.IS_PRELOAD]: () => action.payload.isPreload,
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}
