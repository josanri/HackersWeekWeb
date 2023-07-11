<script>
    import patrocinadores from "$lib//data/info/patrocinadores.json";
    import organizadores from "$lib/data/info/organizadores.json";
    import colaboradores from "$lib/data/info/colaboradores.json";
    import Patrocinador from "$lib/components/patrocinador.svelte";
    import Organizador from "$lib/components/organizador.svelte";
</script>

<svelte:head>
    <title>Organización</title>
	<meta name="description" content="Organizadores, colaboradores y patrocinadores de la Hackers Week 9." />
</svelte:head>



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
