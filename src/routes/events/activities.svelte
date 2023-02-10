<script>
    import actividades from "$lib/data/activities.json";
    import Tarjeta from "$lib/tarjeta.svelte";
</script>

<svelte:head>
    <title>Actividades</title>
    <meta name="description" content="Información sobre los actividades como videojuegos y jornadas de Rol entre otras, de la Hackers Week 9." />
</svelte:head>

<h3 class="title">Actividades</h3>
{#each actividades as ac}
    <Tarjeta evento={ac}/>
{/each}