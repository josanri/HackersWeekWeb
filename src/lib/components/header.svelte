<script>
    import { page } from "$app/stores";
    import { base } from "$app/paths";
    
    const links = [
        {
            href: "info/aboutus",
            name: "¿Qué es la Hackers Week?",
        },/* ,
        {
            href: "info/horario",
            name: "Horario",
        },
        {
            href: "events/conferences",
            name: "Conferencias",
        },
        {
            href: "events/workshops",
            name: "Talleres",
        },
        {
            name: "Actividades",
            href: "events/activities",
        },
        {
            name: "Organización",
            href: "other/organization",
        },*/
        {
            name: "Hackers Days",
            href: "events/hackersdays",
        }
    ];

    let isActive = false;

    function getActiveClass(c) {
        return c ? "is-active" : "";
    }

    $: activeClass = getActiveClass(isActive);

    page.subscribe(() => (isActive = false));
</script>

<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <!-- svelte-ignore -->
        <a class="navbar-item" href="{base}/">
            <span class ="title is-6">H<span class="has-text-primary">&lt;&gt;</span>W</span>
        </a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
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
                    href="{base}/{href}"
                    >{name}
                </a>
            {/each}
        </div>
    </div>
</nav>
