<script>
    import workshops from "$lib/data/workshops.json";
    import activities from "$lib/data/activities.json";
    import conferences from "$lib/data/conferences.json";
    import Fila from "$lib/fila.svelte";
</script>

<svelte:head>
    <title>Horario</title>
    <meta name="description" content="Información sobre los horarios de conferencias, talleres y videojuegos de la Hackers Week 9."/>
</svelte:head>

<h3 class="title is-1">Horario</h3>
<h4 class ="title is-3">Conferencias</h4>
<table  class = "table">
    <thead>
        <tr>
            <th class="has-text-light has-text-centered">
                Fecha
            </th>
            <th class="has-text-light has-text-centered">
                Título
            </th>
        </tr>
    </thead>
    <tbody>
        {#each conferences as c}
        <Fila evento={c} />
        {/each}
    </tbody>
</table>
<br>
<h4 class ="title is-3">Talleres</h4>
<table  class = "table">
    <thead>
        <tr>
            <th class="has-text-light has-text-centered">
                Fecha
            </th>
            <th class="has-text-light has-text-centered">
                Título
            </th>
        </tr>
    </thead>
    <tbody>
        {#each workshops as t}
            <Fila evento={t} />
        {/each}
    </tbody>
</table>
<br>
<h4 class ="title is-3">Actividades</h4>
<table  class = "table">
    <thead>
        <tr>
            <th class="has-text-light has-text-centered">
                Fecha
            </th>
            <th class="has-text-light has-text-centered">
                Título
            </th>
        </tr>
    </thead>
    <tbody>
        {#each activities as act}
        <Fila evento={act} />
        {/each}
    </tbody>
</table>