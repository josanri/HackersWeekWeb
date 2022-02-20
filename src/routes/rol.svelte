<script>
    import datos from "$lib/datos.json";
    import Tarjeta from "$lib/tarjeta.svelte";

    const { rol } = datos;
</script>

<svelte:head>
    <title>Rol</title>
</svelte:head>

<h3 class="title">Rol</h3>
{#each rol as r}
    <Tarjeta evento={r}/>
{/each}