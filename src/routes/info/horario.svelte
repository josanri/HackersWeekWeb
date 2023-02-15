<script>
    import workshops from "$lib/data/workshops.json";
    import activities from "$lib/data/activities.json";
    import conferences from "$lib/data/conferences.json";
    import Tabla from "$lib/components/tabla.svelte";
</script>

<svelte:head>
    <title>Horario</title>
    <meta name="description" content="Información sobre los horarios de conferencias, talleres y videojuegos de la Hackers Week 9."/>
</svelte:head>

<h3 class="title is-1">Horario</h3>
<h4 class ="title is-3">Conferencias</h4>
<Tabla eventos={conferences}/>
<h4 class ="title is-3">Talleres</h4>
<Tabla eventos={workshops}/>
<h4 class ="title is-3">Actividades</h4>
<Tabla eventos={activities}/>