<script lang="ts">
  import { cn } from "$lib/utils";

	let {
    children,
    name = "",
    class: className = "",
    ...other
  } = $props();
</script>

<div class={cn("p-3 border border-background-1 relative z-0 hover:border-primary group duration-default", className)} {...other} on:mouseover on:mouseleave on:focus on:blur role="button" tabindex="0">
  {#if name !== ""}
    <span class="absolute px-1 left-1.5 -top-3.5 -z-10 bg-background text-background-4 group-hover:text-primary duration-default">
      {name}
    </span>
  {/if}

  {@render children()}
</div>
