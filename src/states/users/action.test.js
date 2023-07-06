import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import apiServices from '../../utlis/apiServices';
import { setErrorMessage } from '../error/action';
import { asyncGetAllUsers, getAllUsers } from './action';

const fakeDetaUsersResponse = [
	{
		id: 'user-1',
		name: 'Ayam',
		email: 'ayam@dicoding.com',
		avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
	},
	{
		id: 'user-2',
		name: 'Bebek',
		email: 'bebek@dicoding.com',
		avatar: 'https://ui-avatars.com/api/?name=DimasSaputra&background=random',
	},
];

const fakeErrorResponse = new Error('data tidak ditemukan');

describe('Testing comment on thread action', () => {
	beforeEach(() => {
		apiServices._getAllUsers = apiServices.getAllUsers;
	});

	afterEach(() => {
		apiServices.getAllUsers = apiServices._getAllUsers;

		delete apiServices._getAllUsers;
	});

	it('Shoudl dispatch action and get data correctly while fetch success', async () => {
		apiServices.getAllUsers = () => Promise.resolve(fakeDetaUsersResponse);

		const dispatch = vi.fn();

		await asyncGetAllUsers({ idThread: 1 })(dispatch);

		expect(dispatch).toHaveBeenCalledWith(showLoading());
		expect(dispatch).toHaveBeenCalledWith(getAllUsers(fakeDetaUsersResponse));
		expect(dispatch).toHaveBeenCalledWith(hideLoading());
	});

	it('Shoudl dispatch action and throw an error while fetch failed', async () => {
		apiServices.getAllUsers = () => Promise.reject(fakeErrorResponse);

		const dispatch = vi.fn();

		await asyncGetAllUsers()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(showLoading());
		expect(dispatch).toHaveBeenCalledWith(
			setErrorMessage({
				message: fakeErrorResponse.message,
				actionType: 'GET_ALL_USERS',
			})
		);
		expect(dispatch).toHaveBeenCalledWith(hideLoading());
	});
});
