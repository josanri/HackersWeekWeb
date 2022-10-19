<script>
    export let evento;
    const {title, date} = evento;
</script>

{#if evento !== undefined}
<tr>
    <td class="has-text-light has-text-centered p-3">
        {#if date == undefined}
            TBA
        {:else}
            {date}
        {/if}
    </td>
    <td class="has-text-light has-text-centered p-3">{title}</td>
</tr>
{/if}