<script>
    export let evento;
    const { title, description, date, url, ubicacion, trofeos } = evento;
    const has_desc = description.length === "";
    $: short_desc = description.split().slice(0, 36);
    let open_desc = false;
</script>

<div class="box has-background-grey-dark">
    <h3 class="title has-text-primary mb-1">
        {title}
    </h3>
    <p class="has-text-light"><b>{date}</b></p>
    <p class="has-text-light has-text-left">
        <b>Ubicación</b>: {#if ubicacion == undefined}
            Salón de Actos.
        {:else}
            {ubicacion}
        {/if}
    </p>

    {#if has_desc}
        <p class="has-text-light is-info has-text-justified mb-3">
            {open_desc ? description : short_desc}
            <span
                class=" is-text is-clickable is-small has-text-primary is-underlined is-clickable has-text-weight-bold"
                on:click={() => (open_desc = !open_desc)}
            >
                {open_desc ? "Ver menos." : "Ver más."}
            </span>
        </p>
    {/if}

    <div class="has-text-light has-text-left">
        {#if trofeos !== undefined}
            <b>Trofeos</b>: {trofeos}
        {/if}
    </div>

    {#if url !== undefined}
        <a href={url} class="button buttadd is-primary is-rounded">
            Inscríbete aquí
        </a>
    {/if}
</div>
