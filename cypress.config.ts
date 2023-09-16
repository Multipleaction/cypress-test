import { defineConfig } from "cypress";

export default defineConfig({
	viewportWidth: 1920, // Set the desired viewport width
	viewportHeight: 1080, // Set the desired viewport height

	e2e: {
		setupNodeEvents(on, config) {
			// Implement node event listeners here
		},
		baseUrl: "http://localhost:4200/",
	},
});
