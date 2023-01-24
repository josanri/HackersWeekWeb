<script>
    export let organizador;
    const {url, img, alt} = organizador;
</script>

<div class="has-text-centered m-6">
          <a href={url}>
            <figure class="image is-48x48">
              <img src={img} alt={alt} height=240rem width=400rem>
            </figure>
          </a>
</div>