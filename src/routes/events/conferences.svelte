<script>
    import datos from "$lib/datos.json";
    import Tarjeta from "$lib/tarjeta.svelte";

    const { conferences } = datos;
</script>

<svelte:head>
    <title>Conferencias</title>
	<meta name="description" content="Información sobre las conferencias de la Hackers Week 8." />
</svelte:head>

<h3 class="title">Conferencias</h3>
{#each conferences as c}
    <Tarjeta evento={c} />
{/each}
