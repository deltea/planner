<script lang="ts">
	import "../app.css";
  import "iconify-icon";

	let { children } = $props();
</script>

<main class="bg-bg h-screen text-fg font-mono font-bold selection:bg-fg selection:text-bg-1">
  {@render children()}
</main>
