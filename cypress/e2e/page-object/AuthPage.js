class AuthPage {
	// Elements

	// The 'authMenu' element represents the authentication menu on the page.
	get authMenu() {
		return cy.get('.menu-title:contains("Auth")');
	}

	// The 'loginMenuItem' element represents the menu item for the "Login" option.
	get loginMenuItem() {
		return cy.get('.menu-title:contains("Login")');
	}

	// The 'registerMenuItem' element represents the menu item for the "Register" option.
	get registerMenuItem() {
		return cy.get('.menu-title:contains("Register")');
	}

	// The 'forgotPasswordMenuItem' element represents the menu item for the "Request Password" option.
	get forgotPasswordMenuItem() {
		return cy.get('.menu-title:contains("Request Password")');
	}

	// The 'backToLoginLink' element represents "Back to Log In" link that leads to Login page from Request password page
	get backToLoginLink() {
		return cy.get('.text-link').contains('Back to Log In');
	}

	// The 'registerLink' element represents "Register" link that leads to Register page from Request password page
	get registerLink() {
		return cy.get('.text-link').contains('Register');
	}

	// The 'emailInput' element represents the input field for email.
	get emailInput() {
		return cy.get('#input-email');
	}

	// The 'passwordInput' element represents the input field for password.
	get passwordInput() {
		return cy.get('#input-password');
	}

	// The 'fullNameLabel' element represents the label for full name input.
	get fullNameLabel() {
		return cy.get('label[for="input-name"]');
	}

	// The 'repeatPasswordField' element represents the input field for repeating the password.
	get repeatPasswordField() {
		return cy.get('input[name="rePass"]');
	}

	// The 'agreeWithTermsCheckbox' element represents the checkbox for agreeing with terms and policies.
	get agreeWithTermsCheckbox() {
		return cy.get('.custom-checkbox');
	}

	// The 'loginButton' element represents the login button.
	get loginButton() {
		return cy.get('.appearance-filled'); // This is a locator, but it works
	}

	// The 'avatarImage' element represents the user's avatar image.
	get avatarImage() {
		return cy.get('.user-picture.image');
	}

	// Methods

	// The 'selectAuthMenu' method clicks on the authentication menu.
	selectAuthMenu() {
		this.authMenu.click();
	}

	// The 'selectLoginMenuItem' method clicks on the "Login" menu item.
	selectLoginMenuItem() {
		this.loginMenuItem.click();
	}

	// The 'selectRegisterMenuItem' method clicks on the "Register" menu item.
	selectRegisterMenuItem() {
		this.registerMenuItem.click();
	}

	// The 'selectForgotPasswordMenuItem' method clicks on the "Request Password" menu item.
	selectForgotPasswordMenuItem() {
		this.forgotPasswordMenuItem.click();
	}

	// The 'clickBackToLogin' method clicks on the "Back to Log In" button
	clickBackToLogin() {
		this.backToLoginLink.click();
	}

	// The 'clickRegister' method clicks on the  "Register" button
	clickRegister() {
		this.registerLink.click();
	}

	// The 'enterEmail' method types the provided email into the email input field.
	enterEmail(email) {
		this.emailInput.type(email);
	}

	// The 'enterPassword' method types the provided password into the password input field.
	enterPassword(password) {
		this.passwordInput.type(password);
	}

	// The 'checkLoginButtonEnabled' method checks if the login button is enabled.
	checkLoginButtonEnabled() {
		return cy.get('.appearance-filled').should('not.be.disabled');
	}

	// The 'checkLoginButtonDisabled' method checks if the login button is disabled.
	checkLoginButtonDisabled() {
		return cy.get('.appearance-filled').should('be.disabled');
	}

	// The 'clickLoginButton' method clicks on the login button.
	clickLoginButton() {
		this.loginButton.click();
	}

	// The 'enterFullName' method types the provided full name into the input field.
	enterFullName(fullName) {
		this.fullNameLabel.click();
		this.fullNameLabel.type(fullName);
	}

	// The 'enterRepeatPassword' method types the provided repeat password into the input field.
	enterRepeatPassword(repeatPassword) {
		this.repeatPasswordField.type(repeatPassword);
	}

	// The 'emptyEmailInput' method clicks on the email input to clear its content.
	emptyEmailInput() {
		this.emailInput.click();
	}

	// The 'emptyPasswordInput' method clicks on the password input to clear its content.
	emptyPasswordInput() {
		this.passwordInput.click();
	}

	// The 'emptyFullNameInput' method clicks on the full name input to clear its content.
	emptyFullNameInput() {
		this.fullNameLabel.click();
	}

	// The 'emptyRepeatPasswordInput' method clicks on the repeat password input to clear its content.
	emptyRepeatPasswordInput() {
		this.repeatPasswordField.click();
	}

	// The 'checkAgreeWithTerms' method clicks on the "Agree with Terms" checkbox.
	checkAgreeWithTerms() {
		this.agreeWithTermsCheckbox.click();
	}

	// The 'checkAvatarVisibility' method checks if the avatar image is visible.
	checkAvatarVisibility() {
		this.avatarImage.should('be.visible');
	}
}

export default new AuthPage();
