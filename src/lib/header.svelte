<script>
    let isActive = false;
</script>

<nav class="navbar is-black" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <h1>HW&lt;&gt;8</h1>
        </a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            on:click={() => (isActive = !isActive)}
        >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    </div>
    <div class="navbar-menu {isActive ? 'is-active' : ''}">
        <div class="navbar-start">
            <a class="navbar-item" href="/conferences">Conferencias</a>
            <a class="navbar-item" href="/workshops">Talleres</a>
            <a class="navbar-item" href="/videogames">Videojuegos</a>
            <a class="navbar-item" href="/rol">Rol</a>
        </div>
    </div>
</nav>
