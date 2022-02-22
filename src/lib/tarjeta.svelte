<script>
    export let evento;
    const { title, description, date, url, ubicacion } = evento;
    $:short_desc=description.slice(0, 100); // Better implementation to be done
    let open_desc=false;
</script>

<div class="box has-background-dark">
    <div>
        <h1 class="title has-text-primary ">{title}</h1>
        <p class="has-text-light has-text-left">{date}</p>
        {#if !open_desc}
        <div>
          <span class="has-text-light is-info has-text-justified">{short_desc}...</span>
        </div>
        {:else}
        <div >
            <span class="has-text-light is-info has-text-justified">{description}</span>
          </div>
        {/if}
        <span class=" is-text is-small has-text-primary is-underlined is-clickable" on:click={()=>open_desc=!open_desc}> {open_desc? "Ver menos": "Ver más" }</span>
        

        <p class="has-text-light has-text-left">
            Ubicación: {#if ubicacion == undefined}
                Salón de Actos
            {:else}
                {ubicacion}
            {/if}
        </p>
    </div>
    {#if url !== undefined}
        <a href={url} class="button ">Inscripcion</a>
    {/if}
</div>
