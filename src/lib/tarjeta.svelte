<script>
    export let evento;
    const { title, description, date, url, ubicacion } = evento;
    let splited = description.split(".");
    $: short_desc =
        splited.length > 1 ? splited[0].concat(splited[1]) : splited[0]; // Better implementation to be done
    let open_desc = false;
</script>

<div class="box has-background-dark">
    <div>
        <div class="columns">
            <div class="column">
                <h1 class="title has-text-primary ">{title}</h1>
            </div>
            <div class="column" />
            <p class="has-text-light has-text-right"><b>{date}</b></p>
        </div>
        {#if !open_desc}
            <div>
                <p class="has-text-light is-info has-text-justified">
                    {short_desc} 
                    
                    ...
                    <span
                        class=" is-text is-small has-text-primary is-underlined is-clickable"
                        on:click={() => (open_desc = !open_desc)}
                    >
                        {open_desc ? "Ver menos" : "Ver más"}
                    </span>
                </p>
            </div>
        {:else}
            <div>
                <p class="has-text-light is-info has-text-justified">
                    {description}
                    <span
                        class=" is-text is-small has-text-primary is-underlined is-clickable"
                        on:click={() => (open_desc = !open_desc)}
                    >
                        {open_desc ? "Ver menos" : "Ver más"}
                    </span>
                </p>
            </div>
        {/if}

        <br>
        <div class="columns">
            <div class="column">
                <p class="has-text-light has-text-left">
                    <b>Ubicación</b>: {#if ubicacion == undefined}
                        Salón de Actos.
                    {:else}
                        {ubicacion}
                    {/if}
                </p>
            </div>
            <div class="column" />
            {#if url !== undefined}
                <a href={url} class="button is-primary  is-rounded"
                    >Inscríbete aquí</a
                >
            {/if}
        </div>
    </div>
</div>
