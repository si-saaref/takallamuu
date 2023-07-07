import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { renderHook } from '@testing-library/react-hooks';
import FormComment from './index';
import useInput from '../../../hooks/useInput';

expect.extend(matchers);

describe('Testing form comment on detail thread page', () => {
	afterEach(() => {
		cleanup();
	});

	it('Should handle typing comment properly', async () => {
		const handleReply = vi.fn();

		render(<FormComment onReplyThread={handleReply} replyTo='User' />);

		const commentInput = screen.getByPlaceholderText('Comment here');

		await userEvent.type(commentInput, 'testing-comment');

		expect(commentInput).toHaveValue('testing-comment');
	});

	it('Should send comment when create comment button is clicked', async () => {
		const handleReply = vi.fn();

		const { result } = renderHook(() => useInput(''));
		render(<FormComment onReplyThread={handleReply} replyTo='User' />);

		const commentInput = screen.getByPlaceholderText('Comment here');
		await userEvent.type(commentInput, 'testing-comment');
		const commentButton = screen.getByText('Reply');

		await userEvent.click(commentButton);

		handleReply({
			setValueComment: result.current.setValue,
			content: 'testing-comment',
		});
		// console.log(handleReply.mock.calls[2]);

		expect(handleReply).toHaveBeenLastCalledWith({
			setValueComment: result.current.setValue,
			content: 'testing-comment',
		});
	});
});
