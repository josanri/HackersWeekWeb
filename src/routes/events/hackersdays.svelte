<script>
    import ponencia from "$lib/data/hackersdays.json";
    import Tarjeta from "$lib/tarjeta.svelte";
</script>

<svelte:head>
    <title>Hackers Days</title>
    <meta name="description" content="Información sobre los Hackers Days del curso 2022-2023." />
</svelte:head>

<h1 class="title is-2">Hackers Days</h1>
<p  class="box has-background-grey-dark has-text-light" >
    Los Hackers Days son eventos mensuales realizados por el Consejo de Estudiantes de Informática con la colaboración de la Escuela Técnica Superior de Ingeniería Informática donde se reserva espacio y tiempo a ponentes y organizadores de taller para distintas actividades con una duración máxima de 1h y 45 minutos.
</p>
<h2 class="title is-4 has-text-centered">Conferencias pasadas</h2>
{#each ponencia as pon}
<Tarjeta evento={pon}/>
{/each}
<div class="is-flex is-flex-direction-column has-text-centered">
    <h4 class="subtitle is-4 has-text-light">¿Quieres dar una ponencia o taller?</h4>
    <a href = "https://forms.gle/eqH5rZDMYsRKeMzr6" class="button is-primary is-medium is-rounded">Contacta con nosotros</a>
</div>