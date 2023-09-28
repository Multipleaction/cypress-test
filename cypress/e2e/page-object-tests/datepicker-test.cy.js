import DatePickerPage from '../page-object/DatePickerPage';

describe('Datepicker Tests', () => {
	it('should open and select today from the datepicker', () => {
		const moment = require('moment');
		const currentDate = moment().format('MMM D, YYYY');

		cy.visit('/');

		DatePickerPage.selectFormsMenu();
		DatePickerPage.selectDatepickerMenuItem();

		DatePickerPage.openCalendar();
		DatePickerPage.selectToday();

		// Check if the selected date is displayed in a specific field
		cy.get('input[placeholder="Form Picker"]').should(
			'have.value',
			currentDate
		);
	});
});
