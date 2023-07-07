import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('Testing threads reducer', () => {
	it('Should return inital state when no action passed', () => {
		const initialState = [];
		const action = {
			type: '',
		};

		const store = threadsReducer(initialState, action);
		expect(store).toEqual(initialState);
	});

	it('Should return inital state when action is unknown', () => {
		const initialState = [];
		const action = {
			type: 'UNKNOWN',
		};

		const store = threadsReducer(initialState, action);
		expect(store).toEqual(initialState);
	});

	it('Should return inital state when action is not string', () => {
		const initialState = [];
		const action1 = {
			type: true,
		};

		const store1 = threadsReducer(initialState, action1);
		expect(store1).toEqual(initialState);

		const action2 = {
			type: 86719874,
		};

		const store2 = threadsReducer(initialState, action2);
		expect(store2).toEqual(initialState);
	});

	it('Should return the threads if action type is GET_ALL_THREADS', () => {
		const initialState = [];
		const action = {
			type: 'GET_ALL_THREADS',
			payload: {
				threads: [
					{
						id: '1',
						title: 'Threads Title',
						body: 'Body Content',
						category: 'redux',
						createdAt: '2023-05-29T07:55:52.266Z',
						ownerId: 'user-1',
						totalComments: 0,
						upVotesBy: [],
						downVotesBy: [],
					},
					{
						id: '2',
						title: 'Threads Title',
						body: 'Body Content',
						category: 'perkenalan',
						createdAt: '2023-05-29T07:54:35.746Z',
						ownerId: 'user-2',
						totalComments: 0,
						upVotesBy: [],
						downVotesBy: [],
					},
				],
			},
		};

		const store = threadsReducer(initialState, action);

		expect(store).toEqual(action.payload.threads);
	});

	it('Should return the threads if action type is ADD_NEW_THREAD', () => {
		const initialState = [
			{
				id: '2',
				title: 'Threads Title',
				body: 'Body Content',
				category: 'perkenalan',
				createdAt: '2023-05-29T07:54:35.746Z',
				ownerId: 'user-2',
				totalComments: 0,
				upVotesBy: [],
				downVotesBy: [],
			},
		];
		const action = {
			type: 'ADD_NEW_THREAD',
			payload: {
				thread: {
					id: '1',
					title: 'Threads Title',
					body: 'Body Content',
					category: 'redux',
					createdAt: '2023-05-29T07:55:52.266Z',
					ownerId: 'user-1',
					totalComments: 0,
					upVotesBy: [],
					downVotesBy: [],
				},
			},
		};

		const store = threadsReducer(initialState, action);

		expect(store).toEqual([action.payload.thread, ...initialState]);
	});

	it('Should return the threads if action type is SHOW_FILTERED_THREADS', () => {
		const initialState = [
			{
				id: '3',
				title: 'Threads Title',
				body: 'Body Content',
				category: 'perkenalan',
				createdAt: '2023-05-29T07:54:35.746Z',
				ownerId: 'user-3',
				totalComments: 0,
				upVotesBy: [],
				downVotesBy: [],
			},
		];
		const action = {
			type: 'SHOW_FILTERED_THREADS',
			payload: {
				threads: [
					{
						id: '1',
						title: 'Threads Title',
						body: 'Body Content',
						category: 'redux',
						createdAt: '2023-05-29T07:55:52.266Z',
						ownerId: 'user-1',
						totalComments: 0,
						upVotesBy: [],
						downVotesBy: [],
					},
					{
						id: '2',
						title: 'Threads Title',
						body: 'Body Content',
						category: 'perkenalan',
						createdAt: '2023-05-29T07:54:35.746Z',
						ownerId: 'user-2',
						totalComments: 0,
						upVotesBy: [],
						downVotesBy: [],
					},
				],
			},
		};

		const store = threadsReducer(initialState, action);

		expect(store).toEqual(action.payload.threads);
	});
});
