<script>
    export let title, description, url;
</script>

<div class="box has-background-dark">
    <h1 class="title has-text-primary">{title}</h1>
    <p class="has-text-light">{description}</p>
    {#if url !== undefined}
    <a href={url} class="button">Inscripcion</a>
    {/if}
</div>