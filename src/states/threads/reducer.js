import { actionType } from './action';

export default function threadsReducer(state = [], action = {}) {
	const _action = {
		[actionType.GET_ALL_THREADS]: () => {
			return action.payload.threads;
		},
		DEFAUlT: () => state,
	};

	return _action[action.type] || _action.DEFAUlT;
}
