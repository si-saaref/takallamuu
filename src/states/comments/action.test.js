import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import apiServices from '../../utlis/apiServices';
import { addCommentThread, asyncAddCommentThread } from './action';
import { setErrorMessage } from '../error/action';

const fakeCreateCommentResponse = [
	{
		id: 'comment-X0Nr3VG7HYWJML3A',
		content: 'Testing',
		createdAt: '2023-07-06T00:58:02.133Z',
		upVotesBy: [],
		downVotesBy: [],
		owner: {
			id: 'user-qyPGZAlZFUNLPhSQ',
			name: 'Si Suikkkk',
			email: 'rey.mbayang@gmail.com',
			avatar: 'https://ui-avatars.com/api/?name=Si Suikkkk&background=random',
		},
	},
];

const fakeErrorResponse = new Error('"content" is not allowed to be empty');

describe('Testing comment on thread action', () => {
	beforeEach(() => {
		apiServices._addComment = apiServices.addComment;
	});

	afterEach(() => {
		apiServices.addComment = apiServices._addComment;

		delete apiServices._addComment;
	});

	it('Shoudl dispatch action and call alert correctly when data fetching success', async () => {
		apiServices.addComment = () => Promise.resolve(fakeCreateCommentResponse);

		const dispatch = vi.fn();

		await asyncAddCommentThread({ threadId: 1, content: 'Testing' })(dispatch);

		expect(dispatch).toHaveBeenCalledWith(showLoading());
		expect(dispatch).toHaveBeenCalledWith(addCommentThread(fakeCreateCommentResponse));
		expect(dispatch).toHaveBeenCalledWith(hideLoading());
	});

	it('Shoudl dispatch action and call alert correctly when data fetching failed', async () => {
		apiServices.addComment = () => Promise.reject(fakeErrorResponse);

		const dispatch = vi.fn();

		await asyncAddCommentThread({ threadId: 1, content: '' })(dispatch);

		expect(dispatch).toHaveBeenCalledWith(showLoading());
		expect(dispatch).toHaveBeenCalledWith(
			setErrorMessage({
				message: fakeErrorResponse.message,
				actionType: 'ADD_COMMENT',
			})
		);
		expect(dispatch).toHaveBeenCalledWith(hideLoading());
	});
});
