import { describe, expect, it } from 'vitest';
import leaderboardsReducer from './reducer';

describe('Testing tags reducer', () => {
	it('Should return inital state when no action passed', () => {
		const initialState = [];
		const action = {
			type: '',
		};

		const store = leaderboardsReducer(initialState, action);
		expect(store).toEqual(initialState);
	});

	it('Should return inital state when action is unknown', () => {
		const initialState = [];
		const action = {
			type: 'UNKNOWN',
		};

		const store = leaderboardsReducer(initialState, action);
		expect(store).toEqual(initialState);
	});

	it('Should return inital state when action is not string', () => {
		const initialState = [];
		const action1 = {
			type: true,
		};

		const store1 = leaderboardsReducer(initialState, action1);
		expect(store1).toEqual(initialState);

		const action2 = {
			type: 86719874,
		};

		const store2 = leaderboardsReducer(initialState, action2);
		expect(store2).toEqual(initialState);
	});

	it('Should return list tags when action is GET_ALL_LEADERBOARDS', () => {
		const initialState = [];
		const action = {
			type: 'GET_ALL_LEADERBOARDS',
			payload: {
				leaderboards: [
					{
						user: {
							id: 'user-1',
							name: 'Jackboz',
							email: 'Jackboz@dicoding.com',
							avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
						},
						score: 25,
					},
					{
						user: {
							id: 'user-2',
							name: 'MarMan',
							email: 'marman@dicoding.com',
							avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
						},
						score: 0,
					},
				],
			},
		};

		const store = leaderboardsReducer(initialState, action);
		expect(store).toEqual(action.payload.leaderboards);
	});
});
