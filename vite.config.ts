import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	optimizeDeps: {
		include: ['protopb/hello_grpc_web_pb']
	},
	plugins: [sveltekit()]
});
