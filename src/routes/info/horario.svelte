<script>
    import workshops from "$lib/data/workshops.json";
    import videogames from "$lib/data/videogames.json";
    import conferences from "$lib/data/conferences.json";
    import Fila from "$lib/fila.svelte";
</script>


<svelte:head>
    <title>Horario</title>
    <meta name="description" content="Información sobre los horarios de conferencias, talleres y videojuegos de la Hackers Week 9."/>
</svelte:head>

<div class="container p-6 pt-6">
    <h3 class="title">Horario</h3>
    <h4 class ="title is-3">Conferencias y talleres</h4>
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
            {#each workshops as t}
                <Fila evento={t} />
            {/each}
        </tbody>
    </table>
    <br>
    <h4 class ="title is-3">Videojuegos</h4>
    <table  class = "table is-striped is-hoverable">
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
            {#each videogames as v}
            <Fila evento={v} />
            {/each}
        </tbody>
    </table>
</div>