<script>
    import ponencia from "$lib/data/hackersdays.json";
    import Tarjeta from "$lib/tarjeta.svelte";
</script>

<svelte:head>
    <title>Hackers Days</title>
    <meta name="description" content="Información sobre los Hackers Days del curso 20222023." />
</svelte:head>

<h3 class="title">Hackers Days</h3>
{#each ponencia as pon}
    <Tarjeta evento={pon}/>
{/each}