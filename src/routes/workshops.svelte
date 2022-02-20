<script>
    import datos from "$lib/datos.json";
    import Tarjeta from "$lib/tarjeta.svelte";

    const { workshops } = datos;
</script>

<svelte:head>
    <title>Talleres</title>
</svelte:head>

<h3 class="title">Talleres</h3>
{#each workshops as t}
    <Tarjeta evento={t} />
{/each}
