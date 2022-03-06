<script>
      function betterSplit (str) {
        const puntos=2; // Dots to stop
        var res="";
        let i=0;
        let it = 0;
        while (i<puntos  && it<str.length){
            if (str.charAt(it)=='.') i++;
            if (i<puntos) res+=(str.charAt(it));
            it++;
        }
        return res;
    }

    export let evento;
    const { title, description, date, url, ubicacion } = evento;
    $: short_desc = betterSplit(description);
    let open_desc = false;

 
</script>



<div class="box has-background-dark">
    <div>
        <div class="columns is-hidden-touch	">
            <div class="column is-two-thirds">
                <h1 class="title has-text-primary mb-2">{title}</h1>
            </div>
            <div class="column" />
            <p class="has-text-light has-text-right"><b>{date}</b></p>
            </div>
        </div>
        <div class="is-hidden-desktop">
            <h1 class="title has-text-primary mb-0">{title}</h1>
            <p class="has-text-light has-text-left"><b>Fecha: {date}</b></p>
            <p class="has-text-light has-text-left">
                <b>Ubicación</b>: {#if ubicacion == undefined}
                    Salón de Actos.
                {:else}
                    {ubicacion}
                {/if}
            </p>
        </div>

        
            <div>
                <p class="has-text-light is-info has-text-justified mb-3"  >
                    {open_desc ? description : short_desc}

                    {open_desc ? "" : "..."} 

                    <span 
                        class=" is-text is-small has-text-primary is-underlined is-clickable has-text-weight-bold"
                        on:click={() => (open_desc = !open_desc)}
                    >
                        {open_desc ? "Ver menos." : "Ver más."}
                    </span>
                </p>
            </div>


        <div class="columns is-hidden-touch">
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
                <a href={url} class="button is-primary is-rounded"
                    >Inscríbete aquí</a
                >
            {/if}
        </div>
        <div class="is-hidden-desktop">
            <div class="columns is-centered">
            <div class="column has-text-centered">
                {#if url !== undefined}
                <a href={url} class="button buttadd is-primary is-rounded "
                    >Inscríbete aquí</a
                >
                
            {/if}
            </div>
        </div>
        </div>
    </div>
  