<script context="module">
	export const prerender = true;
</script>

<script>
	import { base } from "$app/paths";
	import Header from "$lib/header.svelte";
	import Footer from "$lib/footer.svelte";
	import "../app.scss";

	import { page } from "$app/stores";
</script>

<Header />

<main>
	{#if $page.url.pathname != base}
		<section class="section">
			<slot />
		</section>
	{:else}
		<slot />
	{/if}
</main>

<Footer />
