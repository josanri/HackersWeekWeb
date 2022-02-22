<script context="module">
	export const prerender = true;
</script>

<script>
	import { page } from "$app/stores";
	import { base } from "$app/paths";
	import Header from "$lib/header.svelte";
	import Footer from "$lib/footer.svelte";
	import "../app.scss";

</script>

<Header />

<main>
	{$page.url.pathname} === {base} ? {$page.url.pathname !== base}
	{#if $page.url.pathname !== base}
		<section class="section">
			<slot />
		</section>
	{:else}
		<slot />
	{/if}
</main>

<Footer />
