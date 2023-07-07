import { cleanup, prettyDOM, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ThreadComment from './index';

// ! We have to import this if we want to use expect as it built by chai or jest assertion
import matchers from '@testing-library/jest-dom/matchers';
import userEvent from '@testing-library/user-event';
expect.extend(matchers);

describe('Testing comment component', () => {
	let thread;
	let threadId;

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
		threadId = 'thread-Np47p4jhUXYhrhRn';
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
