<script>
	import Title from '$lib/Title.svelte';
</script>

<header>
	<nav>
		<Title title="Smitty's Site" />
		<div class="links">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/guides">Guides</a>
			<a href="/message">Message Me</a>
		</div>
	</nav>
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
		text-align: center;
		background-color: rgba(0, 0, 0, 0.1);
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
	.links {
		margin-left: auto;
	}
	a {
		margin-left: 10px;
	}
	nav {
		display: flex;
		align-items: center;
		max-width: 960px;
		margin: 0 auto;
	}
</style>
