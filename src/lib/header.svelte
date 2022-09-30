<script>
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    const links = [
        {
            href: "/conferences",
            name: "Conferencias",
        },
        {
            href: "/workshops",
            name: "Talleres",
        },
        {
            href: "/videogames",
            name: "Videojuegos",
        }
    ];

    let isActive = false;

    function getActiveClass(c) {
        return c ? "is-active" : "";
    }

    $: activeClass = getActiveClass(isActive);

    page.subscribe(() => (isActive = false));
</script>

<nav class="navbar is-black" aria-label="main navigation">
    <div class="navbar-brand">
        <!-- svelte-ignore -->
        <a class="navbar-item" href="{base}/">
            <h1>HW&lt;&gt;9</h1>
        </a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <!--<a
            role="button"
            class="navbar-burger {activeClass}"
            aria-label="menu"
            aria-expanded="false"
            on:click={() => (isActive = !isActive)}
        >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    </div>
    <div class="navbar-menu {activeClass}">
        <div class="navbar-start">
            {#each links as { href, name }}
                <a
                    class="navbar-item"
                    href="{base}/events{href}"
                    >{name}
                </a>
            {/each}
        </div>-->
    </div>
</nav>
