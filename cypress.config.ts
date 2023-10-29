import {defineConfig} from 'cypress';

export default defineConfig({
	projectId: 'qhtyz1',
	viewportWidth: 1920, // Set the desired viewport width
	viewportHeight: 1080, // Set the desired viewport height
	reporter: 'mochawesome',
	reporterOptions: {
		reportDir: 'cypress/results',
		overwrite: false,
		html: false,
		json: true,
	},
	e2e: {
		setupNodeEvents(on, config) {
			// Implement node event listeners here
		},
		baseUrl: 'http://localhost:4200/',
	},
});
