# create-svelte

Example of SvelteKit + TypeScript + gRPC-Web

## How it was created

1. create a project

```
$ npm create vite@latest
✔ Project name: … example-sveltekit-typescript-grpc-web
✔ Select a framework: › Svelte
✔ Select a variant: › SvelteKit ↗

create-svelte version 2.0.0-next.190

Welcome to SvelteKit!

This is release candidate software; expect bugs and missing features.

Problems? Open an issue on https://github.com/sveltejs/kit/issues if none exists already.

✔ Which Svelte app template? › Skeleton project
✔ Add type checking with TypeScript? › Yes, using TypeScript syntax
✔ Add ESLint for code linting? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Playwright for browser testing? … No / Yes
```


2. create a workspace for gRPC-Web

```
$ npm init -w packages/protopb
$ cat packages/protopb/package.json
{
  "name": "protopb",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "commonjs",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

3. generate gRPC-Web codes from Protocol Buffers definitions

```
$ protoc -I proto \
  --js_out=import_style=commonjs:packages/protopb \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcweb:packages/protopb \
  hello.proto
```

4. update vite.config.ts

```
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	optimizeDeps: {
		include: ['protopb/hello_grpc_web_pb']
	},
	plugins: [sveltekit()]
});
```

5. install necessary pacakges

```
$ npm install --save-dev google-protobuf grpc-web
```
