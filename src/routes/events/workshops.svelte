<script>
    import workshops from "$lib/data/workshops.json";
    import Tarjeta from "$lib/tarjeta.svelte";
</script>

<svelte:head>
    <title>Talleres</title>
    <meta name="description" content="Información sobre los talleres de la Hackers Week 9." />
</svelte:head>

<h3 class="title">Talleres</h3>
{#each workshops as t}
    <Tarjeta evento={t} />
{/each}
