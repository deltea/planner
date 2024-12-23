<script lang="ts">
	import "../app.css";
  import "iconify-icon";

	let { children } = $props();
</script>

<main class="bg-background h-screen text-foreground font-mono font-bold">
  {@render children()}
</main>
