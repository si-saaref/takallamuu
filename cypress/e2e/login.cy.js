/**
 * - Login spec
 *   - Should show modal login correctly
 *   - Should display alert when email is empty
 *   - Should display alert when password is empty
 *   - Should display alert when email and password are wrong
 *   - Should display homepage when email and password are correct
 */

describe('Testing login flow', () => {
	beforeEach(() => {
		cy.viewport(1500, 768);
		cy.visit('http://localhost:5173?wizard=0');
		cy.get('[data-cy="header-login-button"]')
			.contains(/^Login$/)
			.click();
		Cypress.config('defaultCommandTimeout', 7000);
	});

	afterEach(() => {
		Cypress.config('defaultCommandTimeout', 4000);
	});

	it('Should show modal login correctly', () => {
		cy.get('p')
			.contains(/^Login$/)
			.should('be.visible');
		cy.get('input[placeholder="Email"]').should('be.visible');
		cy.get('input[placeholder="Password"]').should('be.visible');
	});

	it('Should display alert when email is empty', () => {
		cy.get('[data-cy="modal-login-button"]')
			.contains(/^Login$/)
			.click();

		cy.get('.load-bar').should('not.exist');
		cy.get('div').contains('"email" is not allowed to be empty');
	});

	it('Should display alert when password is empty', () => {
		cy.get('input[placeholder="Email"]').type('rey.mbayang@gmail.com');

		cy.get('[data-cy="modal-login-button"]')
			.contains(/^Login$/)
			.click();

		cy.get('.load-bar').should('not.exist');
		cy.get('div').contains('"password" is not allowed to be empty');
	});

	it('Should display alert when email and password are wrong', () => {
		cy.get('input[placeholder="Email"]').type('wrong_email@gmail.com');

		cy.get('input[placeholder="Password"]').type('wrong_password');

		cy.get('[data-cy="modal-login-button"]')
			.contains(/^Login$/)
			.click();

		cy.get('.load-bar').should('not.exist');
		cy.get('div').contains('email or password is wrong');
	});

	it('Should display homepage when email and password are correct', () => {
		cy.get('input[placeholder="Email"]').type('rey.mbayang@gmail.com');

		cy.get('input[placeholder="Password"]').type('123123123');

		cy.get('[data-cy="modal-login-button"]')
			.contains(/^Login$/)
			.click();

		cy.get('h1')
			.contains(/^Explore$/)
			.should('be.visible');

		// ! Due to page build once before test and conditional rendering in header comp => it's better approach to use wizard https://docs.cypress.io/guides/core-concepts/conditional-testing#Use-the-URL-to-control-it
		// cy.visit('http://localhost:5173?wizard=1');
		// cy.wait(3000);
		cy.get('.load-bar').should('not.exist'); //! https://filiphric.com/how-to-wait-for-page-to-load-in-cypress
		cy.get('[data-cy="header-logout-button"]').should('be.visible');
	});
});
