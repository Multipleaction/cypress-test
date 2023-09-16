describe("Cypress first ui tests", () => {
	let colors;

	beforeEach(() => {
		cy.visit("/");
		cy.fixture("colors.json").then((data) => {
			colors = data;
		});
	});

	it("Should validate colour and color text", () => {
		// Check for Light background color as it is default
		cy.checkBackgroundColor(colors.Light);

		cy.clickSelectButton();

		// Check for Dark background color
		cy.clickOptionByValueAndLabel("dark", "Dark");
		cy.checkBackgroundColor(colors.Dark);

		cy.clickSelectButton();

		// Check for Cosmic background color
		cy.clickOptionByValueAndLabel("cosmic", "Cosmic");
		cy.checkBackgroundColor(colors.Cosmic);

		cy.clickSelectButton();

		// Check for Corporate background color
		cy.clickOptionByValueAndLabel("corporate", "Corporate");
		cy.checkBackgroundColor(colors.Corporate);

		cy.clickSelectButton();

		// Check for Light background color
		cy.clickOptionByValueAndLabel("default", "Light");
		cy.checkBackgroundColor(colors.Light);
	});

	it("Should check Products details text section is togglable", () => {
		cy.contains("span.menu-title", "Layout").click();
		cy.contains("span.menu-title", "Accordion").click();

		const textToCheck = "A nebula is an interstellar cloud of dust";

		// Check that the first section with text is initially hidden
		cy.get(".item-body").eq(0).contains(textToCheck).should("not.be.visible");

		// Click the button to reveal the first section
		cy.contains("Toggle First Item").click();

		// Check that the first section is now visible
		cy.get(".item-body").eq(0).contains(textToCheck).should("be.visible");
	});
	it("Should check popover", () => {
		cy.contains("span.menu-title", "Modal & Overlays").click();
		cy.contains("span.menu-title", "Popover").click();

		cy.contains("Right").trigger("mouseenter");

		cy.contains(".primitive-overlay", "Hello, how are you today?").should(
			"be.visible"
		);
	});
	it("Should show name in Return Result From Dialog", () => {
		let myName = "Dmytro";

		cy.contains("span.menu-title", "Modal & Overlays").click();
		cy.contains("span.menu-title", "Dialog").click();
		cy.contains("Enter Name").click();

		cy.get('[nbinput][placeholder="Name"]').type(myName);
		cy.contains("Submit").should("be.visible").click();

		cy.get(".result-from-dialog")
			.find(".ng-star-inserted")
			.should("have.text", myName);
	});
});
