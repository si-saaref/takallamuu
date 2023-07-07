describe('Testing login flow', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173');
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
});
