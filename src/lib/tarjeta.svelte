<script>
    export let evento;
    const { title, description, date, url, ubicacion } = evento;
    const has_desc = description !== undefined;
    const description_words = has_desc && description.split(" ");
    const description_overflow_length = 48;
    const description_overflows =
        has_desc && description_words.length > description_overflow_length;
    const short_desc =
        has_desc &&
        description_words.slice(0, description_overflow_length).join(" ") +
            (description_overflows ? "..." : "");
    let open_desc = false;
</script>

<div class="box has-background-grey-dark">
    <h3 class="title is-4 has-text-primary mb-1">
        {title}
    </h3>

    {#if date !== undefined}
        <p class="has-text-light"><b>Fecha</b>: <b>{date}</b></p>
    {/if}

    {#if ubicacion !== undefined}
        <p class="has-text-light has-text-left">
            <b>Ubicación</b>:
            {ubicacion}
        </p>
    {/if}

    {#if has_desc}
        <b class="has-text-light">Descripción</b>
        <p class="has-text-light is-info mb-3">
            {open_desc ? description : short_desc}
            <span
                class=" is-text is-clickable is-small has-text-primary is-underlined is-clickable has-text-weight-bold is-flex is-justify-content-center pt-5"
                on:click={() => (open_desc = !open_desc)}
            >
            {#if description !== short_desc}
                <button class ="column is-narrow is-centered button is-primary is-rounded is-small is-fullwidth">{open_desc ? "Ver menos" : "Ver más"}</button>
            {/if}
            </span>
        </p>
    {/if}

    {#if url !== undefined}
        <a href={url} class="mt-3 button is-primary" target="_blank">
            Inscríbete
        </a>
    {/if}
</div>
