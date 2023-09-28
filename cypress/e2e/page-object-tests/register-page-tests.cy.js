import AuthPage from '../page-object/AuthPage';

describe('Authentication Tests', () => {
	beforeEach(() => {
		cy.visit('/');
		AuthPage.selectAuthMenu();
		AuthPage.selectRegisterMenuItem();
	});

	it('should register successfully', () => {
		AuthPage.enterFullName('Dmytro');
		AuthPage.enterEmail('email@example.com');
		AuthPage.enterPassword('password');
		AuthPage.enterRepeatPassword('password');

		AuthPage.checkAgreeWithTerms();
		AuthPage.clickLoginButton();
		AuthPage.checkAvatarVisibility();
	});

	it('should validate all fields with invalid data', () => {
		AuthPage.enterFullName('D');

		// Check if validation error messages are visible
		cy.contains('Full name should contains from 4 to 50 characters').should(
			'be.visible'
		);
		AuthPage.enterEmail('q');
		AuthPage.enterPassword('1');

		cy.get('#title').click(); // Just click somwhere to show password validation message

		// Check if validation error messages are visible
		cy.contains('Email should be the real one!').should('be.visible');

		cy.contains('Password should contain from 4 to 50 characters').should(
			'be.visible'
		);

		AuthPage.enterRepeatPassword('123456789');

		// Check if border is red (Можна для кожної рамки таке напихати, але суть та сама)
		cy.get('#input-re-password').should('have.class', 'status-danger');
	});

	it('should validate empty email, password, and repeat password fields', () => {
		AuthPage.emptyEmailInput();
		AuthPage.emptyPasswordInput();
		AuthPage.emptyRepeatPasswordInput();

		cy.get('#title').click(); // Just click somewhere to show validation messages

		cy.contains('Email is required!').should('be.visible');
		cy.contains('Password is required!').should('be.visible');
		cy.contains('Password confirmation is required!').should('be.visible');
	});

	it('should disable the Register button without agreement', () => {
		AuthPage.enterFullName('Dmytro');
		AuthPage.enterEmail('email@example.com');
		AuthPage.enterPassword('password');
		AuthPage.enterRepeatPassword('password');

		AuthPage.checkLoginButtonDisabled();
	});
});
