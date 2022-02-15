<script context="module">
	export const prerender = true;
</script>

<script>
	import datos from "$lib/datos.json";
	import Tarjeta from "$lib/tarjeta.svelte";

	const { conferencias } = datos;

	console.log(conferencias);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="hero is-fullheight-with-navbar is-dark is-bold">
	<div class="hero-body">
		<p class="title is-1">Hackers Week 8</p>
	</div>
</section>

<section class="section">
	{#each conferencias as c}
		<Tarjeta title={c.title} description={c.description} url={c.url} />
	{/each}
</section>
