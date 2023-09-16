describe("Open tabs", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it("Should open Layout -> Accordion", () => {
		cy.contains("span.menu-title", "Layout").click();
		cy.contains("span.menu-title", "Accordion").click();
	});
	it("Should open Forms -> Form Layouts", () => {
		cy.contains("span.menu-title", "Forms").click();
		cy.contains("span.menu-title", "Form Layouts").click();
	});
	it("Should show popover", () => {
		cy.contains("span.menu-title", "Modal & Overlays").click();
		cy.contains("span.menu-title", "Popover").click();
		cy.contains("Bottom").trigger("mouseenter");
		cy.contains(".primitive-overlay", "Hello, how are you today?").should(
			"be.visible"
		);
	});
});
