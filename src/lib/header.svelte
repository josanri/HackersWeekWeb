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
            <h1>HW&lt;&gt;8</h1>
        </a>
    </div>
</nav>
