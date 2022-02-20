<script context="module">
	export const prerender = true;
</script>

<script>
	import datos from "$lib/datos.json";
	import Hero from "$lib/hero.svelte";
	import Tarjeta from "$lib/tarjeta.svelte";

	const { conferencias } = datos;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Hero />

<section class="section">
	{#each conferencias as c}
		<Tarjeta evento={c} />
	{/each}
</section>
