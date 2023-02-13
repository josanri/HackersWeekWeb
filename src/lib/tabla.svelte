<script>
    export let eventos;
    import Fila from "$lib/fila.svelte";
</script>

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
        {#each eventos as t}
            <Fila evento={t} />
        {/each}
    </tbody>
</table>
<br>
