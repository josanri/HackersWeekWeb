<script>
    import conferences from "$lib/data/conferences.json";
    import Tarjeta from "$lib/tarjeta.svelte";
</script>

<svelte:head>
    <title>Conferencias</title>
	<meta name="description" content="Información sobre las conferencias de la Hackers Week 9." />
</svelte:head>

<h3 class="title">Conferencias</h3>
{#each conferences as c}
    <Tarjeta evento={c} />
{/each}
