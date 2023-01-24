<script>
    import patrocinadores from "$lib/data/patrocinadores.json";
    import Patrocinador from "$lib/patrocinador.svelte";
</script>

<section class="hero is-fullheight-with-navbar is-black">
    <div class="hero-body">
        <div class="container">
            <h1 class="title is-1" id = "title">HACKERS <b id="azul">&lt;&gt;</b> WEEK 9</h1>
            <h2 class="title is-2">del 20 al 23 de febrero de 2023</h2>
            <br>
        </div>
    </div>
</section>

<section class="hero is-black">
    <div class="hero-body">
        <div class="container">
            <h1 class="title is-2">Patrocinadores</h1>
            <div class="patrocinadores">
                {#each patrocinadores as p}
                    <Patrocinador patrocinador={p}/>
                {/each}
            </div>
        </div>
    </div>
</section>