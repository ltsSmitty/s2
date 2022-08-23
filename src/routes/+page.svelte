<script>
	let title = 'SMS sending test';

	const updateTitle = () => {
		title = 'something completely different';
	};

	const sentMessage = () => {};
</script>

<div class="index">
	<h2>{title}</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<button on:click={updateTitle}> click me</button>
	<input type="text" bind:value={title} />

	<a href="/guides">View guides</a>
	<a href="about">About</a>
</div>

<style>
	.index {
		text-align: center;
		display: block;
		margin: 20px auto;
	}
</style>
