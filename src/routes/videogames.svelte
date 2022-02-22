<script>
    import datos from "$lib/datos.json";
    import Tarjeta from "$lib/tarjeta.svelte";

    const { videogames } = datos;
</script>

<svelte:head>
    <title>Videojuegos</title>
</svelte:head>

<h3 class="title">Videojuegos</h3>
{#each videogames as v}
    <Tarjeta evento={v}/>
{/each}