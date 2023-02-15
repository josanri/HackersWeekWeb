<script>
    export let patrocinador;
    const {url, img, alt} = patrocinador;
</script>

<div class="has-text-centered m-6">
          <a href={url}>
            <figure class="image is-48x48">
              <img src={img} alt={alt} width=240rem height=200rem>
            </figure>
          </a>
</div>