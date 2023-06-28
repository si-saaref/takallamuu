import { actionType } from './action';

export default function leaderboardsReducer(state = [], action = {}) {
	const _action = {
		[actionType.GET_ALL_LEADERBOARDS]: () => {
			return action.payload.leaderboards;
		},
		DEFAULT: () => state,
	};

	return (_action[action.type] || _action.DEFAULT)();
}