<script>
	import '../styles/global.css';
	export let title = 'Smitty Site';
</script>

<div class="title" style="display: flex; ">
	<img src="/mylogo.svg" alt="site logo" style="height:100px;" />
	<h1>{title}</h1>
</div>

<style>
	.title {
		display: flex;
	}
	.title img {
		display: inline-block;
		filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
	}

	.title h1 {
		margin-left: 10px;
	}
</style>
