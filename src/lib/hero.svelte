<script>
    import patrocinadores from "$lib/data/patrocinadores.json";
    import organizadores from "$lib/data/organizadores.json";
    import colaboradores from "$lib/data/colaboradores.json";
    import Patrocinador from "$lib/patrocinador.svelte";
    import Organizador from "$lib/organizador.svelte";
</script>

<section class="hero is-fullheight-with-navbar is-black">
    <div class="hero-body">
        <div class="container">
            <h1 class="title is-1" id = "title">HACKERS <b class="has-text-primary">&lt;&gt;</b> WEEK 9</h1>
            <h2 class="title is-2">del 20 al 23 de febrero de 2023</h2>
            <br>
        </div>
    </div>
</section>
<section class="hero is-black">
    <div class="hero-body pb-1">
        <div class="container">
            <h1 class="title is-2 ">Organiza</h1>
            <div class="patrocinadores">
                {#each organizadores as p}
                    <Organizador organizador={p}/>
                {/each}
            </div>
            <h1 class="title is-2 mt-4" >Patrocinan</h1>
            <div class="patrocinadores">
                {#each patrocinadores as p}
                    <Patrocinador patrocinador={p}/>
                {/each}
            </div>
            <h1 class="title is-2 mt-4 ">Colaboran</h1>
            <div class="patrocinadores">
                {#each colaboradores as p}
                    <Organizador organizador={p}/>
                {/each}
            </div>
        </div>
    </div>
</section>
