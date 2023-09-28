import AuthPage from '../page-object/AuthPage';

describe('Authentication Tests', () => {
	beforeEach(() => {
		cy.visit('/');
		AuthPage.selectAuthMenu();
		AuthPage.selectForgotPasswordMenuItem();
	});

	it('should check REquest password enabled with valid email', () => {
		AuthPage.enterEmail('email@example.com');
		AuthPage.checkLoginButtonEnabled();
	});

	it('should check REquest password disbled and validation message with invalid email', () => {
		AuthPage.enterEmail('e');

		cy.get('#title').click(); // Just click somwhere to show password validation message

		// Check if validation error messages are visible
		cy.contains('Email should be the real one!').should('be.visible');
		AuthPage.checkLoginButtonDisabled();
	});

	it('should navigate to Login page when clicking "Back to Log In" link', () => {
		AuthPage.clickBackToLogin();
		// Check if the URL is now '/auth/login'
		cy.url().should('include', '/auth/login');
	});

	it('should navigate to Register page when clicking "Register" link', () => {
		AuthPage.clickRegister();
		// Check if the URL is now '/auth/register'
		cy.url().should('include', '/auth/register');
	});
});
