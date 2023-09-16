/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
declare namespace Cypress {
	interface Chainable<Subject = any> {
		clickSelectButton(): Chainable<any>;
		clickOptionByValueAndLabel(
			optionValue: string,
			expectedLabel: string
		): Chainable<any>;
		checkBackgroundColor(expectedColor: string): Chainable<any>;
	}
}

// Clicks select button and verifies dropdown with background colors visible
Cypress.Commands.add("clickSelectButton", () => {
	cy.get("ngx-header").find(".select-button").click();
	cy.get(".options-list").should("be.visible");
});

// Clicks background color option element and validates its text
Cypress.Commands.add(
	"clickOptionByValueAndLabel",
	(optionValue, expectedLabel) => {
		cy.get(`[ng-reflect-value="${optionValue}"]`)
			.should(($el) => {
				expect($el.text().trim()).to.eq(expectedLabel);
			})
			.click();
	}
);

// Checks background color match expected from fixture
Cypress.Commands.add("checkBackgroundColor", (expectedColor) => {
	cy.get("nb-layout-header nav").should(
		"have.css",
		"background-color",
		expectedColor
	);
});
