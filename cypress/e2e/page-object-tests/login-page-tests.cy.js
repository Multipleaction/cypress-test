import AuthPage from '../page-object/AuthPage';

describe('Authentication Tests', () => {
	beforeEach(() => {
		cy.visit('/');
		AuthPage.selectAuthMenu();
		AuthPage.selectLoginMenuItem();
	});

	it('should login successfully', () => {
		AuthPage.enterEmail('email@example.com');
		AuthPage.enterPassword('password');

		AuthPage.clickLoginButton();

		// Check if the avatar is visible
		AuthPage.checkAvatarVisibility();
	});

	it('should validate email and password fields with invalid data', () => {
		AuthPage.enterEmail('q');
		AuthPage.enterPassword('1');

		cy.get('#title').click(); // Just click somwhere to show password validation message

		// Check if validation error messages are visible
		cy.contains('Email should be the real one!').should('be.visible');
		cy.contains('Password should contain from 4 to 50 characters').should(
			'be.visible'
		);

		AuthPage.checkLoginButtonDisabled();
	});

	it('should validate empty email, password, and repeat password fields', () => {
		AuthPage.emptyEmailInput();
		AuthPage.emptyPasswordInput();

		cy.get('#title').click(); // Just click somewhere to show validation messages

		// Check if validation error messages are visible
		cy.contains('Email is required!').should('be.visible');
		cy.contains('Password is required!').should('be.visible');

		AuthPage.checkLoginButtonDisabled();
	});

	it('should disable the Login button by default', () => {
		AuthPage.checkLoginButtonDisabled();
	});
});
