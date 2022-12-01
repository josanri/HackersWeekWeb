<script>
    import ponencia from "$lib/data/hackersdays.json";
    import Tarjeta from "$lib/tarjeta.svelte";
</script>

<svelte:head>
    <title>Hackers Days</title>
    <meta name="description" content="Información sobre los Hackers Days del curso 2022-2023." />
</svelte:head>

<h3 class="title">Hackers Days</h3>
<div class = "column is-narrow has-text-centered">
    <div class="column box has-background-grey-dark has-text-light mt-4">
        <p> Los Hackers Days son eventos mensuales realizados por el Consejo de Estudiantes de Informática con la colaboración de la Escuela Técnica Superior de Ingeniería Informática donde se reserva espacio y tiempo a ponentes y organizadores de taller para distintas actividades con una duración máxima de 1h y 45 minutos.</p>
    </div>
</div>
<h4 class="title is-4 has-text-centered">Conferencias pasadas</h4>
{#each ponencia as pon}
<Tarjeta evento={pon}/>
{/each}
<div class="is-flex is-flex-direction-column has-text-centered">
    <h4 class="title is-4 has-text-light">¿Quieres dar una ponencia o taller?</h4>
    <a href = "https://forms.gle/eqH5rZDMYsRKeMzr6" class="button is-primary is-medium is-rounded">Contacta con nosotros</a>
</div>