import { describe, expect, it } from 'vitest';
import tagsReducer from './reducer';

describe('Testing tags reducer', () => {
	it('Should return inital state when no action passed', () => {
		const initialState = [];
		const action = {
			type: '',
		};

		const store = tagsReducer(initialState, action);
		expect(store).toEqual(initialState);
	});

	it('Should return inital state when action is unknown', () => {
		const initialState = [];
		const action = {
			type: 'UNKNOWN',
		};

		const store = tagsReducer(initialState, action);
		expect(store).toEqual(initialState);
	});

	it('Should return inital state when action is not string', () => {
		const initialState = [];
		const action1 = {
			type: true,
		};

		const store1 = tagsReducer(initialState, action1);
		expect(store1).toEqual(initialState);

		const action2 = {
			type: 86719874,
		};

		const store2 = tagsReducer(initialState, action2);
		expect(store2).toEqual(initialState);
	});

	it('Should return list tags when action is GET_ALL_TAGS', () => {
		const initialState = [];
		const action = {
			type: 'GET_ALL_TAGS',
			payload: {
				tags: ['Redud', 'Perkenalan'],
			},
		};

		const store = tagsReducer(initialState, action);
		expect(store).toEqual(action.payload.tags);
	});

	it('Should return list tags when action is SHOW_MORE_TAGS', () => {
		const initialState = [];
		const action = {
			type: 'SHOW_MORE_TAGS',
			payload: {
				tags: ['Redud', 'Perkenalan', 'Mainan', 'Unit Testing', 'Dicoding'],
			},
		};

		const store = tagsReducer(initialState, action);
		expect(store).toEqual(action.payload.tags);
	});
});
