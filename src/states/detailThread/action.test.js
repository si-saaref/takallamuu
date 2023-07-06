import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import apiServices from '../../utlis/apiServices';
import { asyncGetDetailThread, getDetailThread } from './action';
import { setErrorMessage } from '../error/action';

const fakeDetaDetaiThreadResponse = {
	id: 'thread-124',
	title: 'Title 1',
	body: 'Content 1',
	createdAt: '2023-05-29T07:55:52.266Z',
	owner: {
		id: 'user-45234',
		name: 'Dimas Saputra',
		avatar: '',
	},
	category: 'cat',
	comments: [],
	upVotesBy: [],
	downVotesBy: [],
};

const fakeErrorResponse = new Error('thread tidak ditemukan');

describe('Testing comment on thread action', () => {
	beforeEach(() => {
		apiServices._getThreadDetail = apiServices.getThreadDetail;
	});

	afterEach(() => {
		apiServices.getThreadDetail = apiServices._getThreadDetail;

		delete apiServices._getThreadDetail;
	});

	it('Shoudl dispatch action and get data correctly while fetch success', async () => {
		apiServices.getThreadDetail = () => Promise.resolve(fakeDetaDetaiThreadResponse);

		const dispatch = vi.fn();

		await asyncGetDetailThread({ idThread: 1 })(dispatch);

		expect(dispatch).toHaveBeenCalledWith(showLoading());
		expect(dispatch).toHaveBeenCalledWith(getDetailThread(fakeDetaDetaiThreadResponse));
		expect(dispatch).toHaveBeenCalledWith(hideLoading());
	});

	it('Shoudl dispatch action and throw an error while fetch failed', async () => {
		apiServices.addComment = () => Promise.reject(fakeErrorResponse);

		const dispatch = vi.fn();

		await asyncGetDetailThread({ threadId: 1, content: '' })(dispatch);

		expect(dispatch).toHaveBeenCalledWith(showLoading());
		expect(dispatch).toHaveBeenCalledWith(
			setErrorMessage({
				message: fakeErrorResponse.message,
				actionType: 'GET_DETAIL_THREAD',
			})
		);
		expect(dispatch).toHaveBeenCalledWith(hideLoading());
	});
});
