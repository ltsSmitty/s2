<script>
	import Title from '$lib/Title.svelte';
</script>

<header>
	<Title title="Smitty's Site" />
</header>

<main>
	<!-- page content -->
	<slot />
</main>
<footer>
	<p>Copyright 2022 Smitty's Web</p>
</footer>

<style>
	header {
		display: flex;
		justify-content: center;
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
</style>
