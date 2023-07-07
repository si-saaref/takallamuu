import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
		// coverage: {
		// 	reporter: ['text', 'html'],
		// 	exclude: ['node_modules/', './tests/vitest.setup.ts'],
		// 	all: true,
		// 	lines: 80,
		// 	functions: 80,
		// 	branches: 80,
		// 	statements: 80,
		// },
		// setupFiles: ['./tests/vitest.setup.ts'],
	},
	e2e: {
		setupNodeEvents(on, config) {},
		video: false,
	},
});
