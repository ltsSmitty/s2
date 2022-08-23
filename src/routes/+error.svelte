<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error }: LoadEvent) {
		return {
			props: { message: error?.message }
		};
	}
</script>

<script lang="ts">
	export let message: string;
</script>

<div class="error">
	<h2>
		Oops!
		<p>{message}</p>
		<a href="/guides">View all Guides...</a>
	</h2>
</div>

<style>
	.error {
		text-align: center;
		margin-bottom: 60px;
	}
</style>
