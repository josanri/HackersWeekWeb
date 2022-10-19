<script>
    import videogames from "$lib/data/videogames.json";
    import Tarjeta from "$lib/tarjeta.svelte";
</script>

<svelte:head>
    <title>Videojuegos</title>
    <meta name="description" content="Información sobre los videojuegos de la Hackers Week 9." />
</svelte:head>

<h3 class="title">Videojuegos</h3>
{#each videogames as v}
    <Tarjeta evento={v}/>
{/each}