<script>
	import Header from "$lib/header.svelte";
	import Footer from "$lib/footer.svelte";
	import "../app.scss";
</script>

<Header />

<main>
	<slot />
</main>

<Footer />