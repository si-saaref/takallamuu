import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, prettyDOM, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginModal from './index';
import { ReactDOM, useEffect } from 'react';
import TestUtils from 'react-dom/test-utils';

describe('Testing login modal component', () => {
	let props;

	it('Should show button to trigger open modal', async () => {
		render(
			<>
				<button
					onClick={() => {
						props = {
							isOpen: true,
							...props,
						};
					}}
				>
					Open Modal
				</button>
			</>
		);

		const buttonOpenModal = screen.getByText('Open Modal');
		await userEvent.click(buttonOpenModal);
	});

	it('Shows modal', () => {
		const handleClose = vi.fn();
		const handleLogin = vi.fn();

		// render(
		// 	<LoginModal handleLogin={handleLogin} isOpenModal={props.isOpen} setOpenModal={handleClose} />
		// );

		// console.log(prettyDOM(document));
	});
});