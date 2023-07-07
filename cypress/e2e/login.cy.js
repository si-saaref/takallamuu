describe('Testing login flow', () => {
	beforeEach(() => {
		cy.viewport(1500, 768);
		cy.visit('http://localhost:5173?wizard=0');
		cy.get('[data-cy="header-login-button"]')
			.contains(/^Login$/)
			.click();
	});

	it('Should show modal login correctly', () => {
		cy.get('p')
			.contains(/^Login$/)
			.should('be.visible');
		cy.get('input[placeholder="Email"]').should('be.visible');
		cy.get('input[placeholder="Password"]').should('be.visible');
	});

	it('should display alert when email is empty', () => {
		cy.get('[data-cy="modal-login-button"]')
			.contains(/^Login$/)
			.click();

		cy.get('div').contains('"email" is not allowed to be empty');
	});

	it('should display alert when password is empty', () => {
		cy.get('input[placeholder="Email"]').type('rey.mbayang@gmail.com');

		cy.get('[data-cy="modal-login-button"]')
			.contains(/^Login$/)
			.click();

		cy.get('div').contains('"password" is not allowed to be empty');
	});

	it('should display alert when username and password are wrong', () => {
		cy.get('input[placeholder="Email"]').type('wrong_email@gmail.com');

		cy.get('input[placeholder="Password"]').type('wrong_password');

		cy.get('[data-cy="modal-login-button"]')
			.contains(/^Login$/)
			.click();

		cy.get('div').contains('email or password is wrong');
	});

	it('should display homepage when username and password are correct', () => {
		cy.get('input[placeholder="Email"]').type('rey.mbayang@gmail.com');

		cy.get('input[placeholder="Password"]').type('123123123');

		cy.get('[data-cy="modal-login-button"]')
			.contains(/^Login$/)
			.click();

		cy.get('h1')
			.contains(/^Explore$/)
			.should('be.visible');

		// ! Due to page build once before test and conditional rendering in header comp => it's better approach to use wizard https://docs.cypress.io/guides/core-concepts/conditional-testing#Use-the-URL-to-control-it
		cy.visit('http://localhost:5173?wizard=1');
		cy.wait(3000);
		cy.get('[data-cy="header-logout-button"]').should('be.visible');
	});
});
