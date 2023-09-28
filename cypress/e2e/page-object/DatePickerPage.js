class DatePickerPage {
	// Elements
	get formsMenu() {
		return cy.get('.menu-title:contains("Forms")');
	}

	get datepickerMenuItem() {
		return cy.get('.menu-title:contains("Datepicker")');
	}

	get openCalendarButton() {
		return cy.get('input[placeholder="Form Picker"]');
	}

	get calendar() {
		return cy.get('nb-calendar-day-picker');
	}

	get todaySelector() {
		return cy.get('.day-cell.today');
	}

	// Methods
	selectFormsMenu() {
		this.formsMenu.click();
	}

	selectDatepickerMenuItem() {
		this.datepickerMenuItem.click();
	}

	openCalendar() {
		this.openCalendarButton.click();
	}

	// Method to select today's date
	selectToday() {
		this.todaySelector.click();
	}
}

export default new DatePickerPage();
