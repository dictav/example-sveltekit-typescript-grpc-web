<script lang="ts">
	import { HelloServiceClient } from "protopb/hello_grpc_web_pb";
	const client = new HelloServiceClient("localhost");
</script>

<div>Client: {client}</div>
<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
