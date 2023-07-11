<script>
  import ediciones from "$lib/data/previous/ediciones-previas.json";
  import Tarjeta from "$lib/components/tarjeta.svelte";
</script>

<svelte:head>
  <title>Conferencias y talleres de ediciones anteriores</title>
  <meta
    name="description"
    content="Información sobre las conferencias de ediciones pasadas de la Hackers Week."
  />
</svelte:head>

{#each Object.entries(ediciones) as [edicion, categorias]}
  <h3 class="title">{edicion}</h3>
  {#each Object.entries(categorias) as [categoria, eventos]}
    <h4 class="title is-4">{categoria}</h4>
    {#each eventos as e}
      <Tarjeta evento={e} />
    {/each}
  {/each}
{/each}
