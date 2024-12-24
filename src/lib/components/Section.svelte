<script lang="ts">
  import { cn } from "$lib/utils";

	let {
    children,
    name = "",
    class: className = "",
    ...other
  } = $props();
</script>

<div class={cn("p-3 border border-bg-1 relative z-0 hover:border-primary group duration-default", className)} {...other}>
  {#if name !== ""}
    <span class="absolute px-1 left-1.5 -top-3.5 -z-10 bg-bg text-bg-4 group-hover:text-primary duration-default">
      {name}
    </span>
  {/if}

  {@render children()}
</div>
