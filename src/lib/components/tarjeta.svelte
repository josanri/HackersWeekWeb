<script>
    export let evento;
    const { title, description, date, url, ubicacion, ponente, tutor, moderador } = evento;
    const has_desc = description !== undefined;
    const has_short_desc = has_desc && description.length == 1;
    let open_desc = false || has_short_desc;
</script>

<div class="box has-background-grey-dark">
    <h3 class="subtitle is-4 has-text-primary mb-1">
        {title}
    </h3>

    {#if date !== undefined}
        <p class="has-text-light"><b>Fecha</b>: <b>{date}</b></p>
    {/if}

    {#if ubicacion !== undefined}
        <p class="has-text-light has-text-left">
            <strong>Ubicación:</strong>
            {ubicacion}
        </p>
    {/if}
    {#if ponente !== undefined}
        <p class="has-text-light has-text-left">
            <strong>Ponente:</strong>
            {ponente}
        </p>
    {/if}
    {#if tutor !== undefined}
        <p class="has-text-light has-text-left">
            <strong>Organizado por:</strong>
            {tutor}
        </p>
    {/if}
    {#if moderador !== undefined}
        <p class="has-text-light has-text-left">
            <b>Moderado por:</b>
            {moderador}
        </p>
    {/if}
    {#if has_desc}
        <strong class="has-text-light">Descripción</strong>
        <div class="has-text-light is-info mb-3">
            {#if open_desc}
                {#each description as paragraph}
                    <p>{paragraph} </p>
                {/each}
            {:else}
                <p>{description[0]} </p>
            {/if}
            {#if !has_short_desc}
                <span
                    class=" is-text is-clickable is-small has-text-primary is-underlined is-clickable has-text-weight-bold is-flex is-justify-content-center pt-2"
                    on:click={() => (open_desc = !open_desc)}
                >
                    <button class ="column is-narrow is-centered button is-primary is-rounded is-small is-fullwidth">{open_desc ? "Ver menos" : "Ver más"}</button>
                </span>
            {/if}
        </div>
    {/if}

    {#if url !== undefined}
        <a href={url} class="mt-3 button is-primary" target="_blank">
            Inscríbete
        </a>
    {/if}
</div>
