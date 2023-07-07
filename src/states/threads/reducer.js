import { actionType } from './action';

export default function threadsReducer(state = [], action = {}) {
	const _action = {
		[actionType.GET_ALL_THREADS]: () => action.payload.threads,
		[actionType.ADD_NEW_THREAD]: () => [action.payload.thread, ...state],
		[actionType.SHOW_FILTERED_THREADS]: () => action.payload.threads,
		DEFAUlT: () => state,
	};

	return (_action[action.type] || _action.DEFAUlT)();
}
