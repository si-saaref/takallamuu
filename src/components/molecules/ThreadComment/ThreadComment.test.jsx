/**
 * - Form Comment spec
 *   - Should show comment correctly
 *   - Should click button like correctly
 *   - Should click button unlike correctly
 */

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// ! We have to import this if we want to use expect as it built by chai or jest assertion
import matchers from '@testing-library/jest-dom/matchers';
import userEvent from '@testing-library/user-event';
import ThreadComment from './index';

expect.extend(matchers);

describe('Testing comment component', () => {
	let thread;

	beforeEach(() => {
		thread = {
			id: 'comment-4NVJAD48hDh7iNqs',
			content: '123',
			createdAt: '2023-07-07T02:33:48.969Z',
			owner: {
				id: 'user-qyPGZAlZFUNLPhSQ',
				name: 'Si Suikkkk',
				avatar: 'https://ui-avatars.com/api/?name=Si Suikkkk&background=random',
			},
			upVotesBy: [],
			downVotesBy: [],
		};
	});

	afterEach(() => {
		cleanup();
	});

	it('Should show comment correctly', () => {
		render(<ThreadComment thread={thread} />);

		// const commentContent = within(screen.getByTestId('body-content')) //!https://testing-library.com/docs/dom-testing-library/api-within/;
		const commentContent = screen.getByTestId('body-content');
		const commentUsername = screen.getByTestId('username-content');

		expect(commentContent).toHaveTextContent(thread.content);
		expect(commentUsername).toHaveTextContent(thread.owner.name);
	});

	it('Should click button like correctly', async () => {
		const handleLikeComment = vi.fn();

		render(<ThreadComment thread={thread} likeComment={handleLikeComment} />);

		const likeButton = screen.getByTestId('like-comment-button');

		await userEvent.click(likeButton);

		expect(handleLikeComment).toBeCalled(thread.id);
	});

	it('Should click button unlike correctly', async () => {
		const handleUnlikeComment = vi.fn();

		render(<ThreadComment thread={thread} dislikeComment={handleUnlikeComment} />);

		const unlikeComment = screen.getByTestId('unlike-comment-button');

		await userEvent.click(unlikeComment);

		expect(handleUnlikeComment).toBeCalled(thread.id);
	});
});
