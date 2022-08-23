<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="error">
	<h2>
		Oops!
		<p>{$page.status} : {$page.error?.message}</p>
		<a href="/guides">View all Guides...</a>
	</h2>
</div>

<style>
	.error {
		text-align: center;
		margin-bottom: 60px;
	}
</style>
