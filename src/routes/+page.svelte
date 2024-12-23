<script lang="ts">
	import Section from "$lib/components/Section.svelte";
</script>

<div class="p-4">
  <Section name="nav" class="flex justify-center items-stretch gap-2">
    <button class="text-foreground hover:bg-background-1 px-4 h-10 duration-default">
      hello
    </button>
    <button class="text-foreground hover:bg-background-1 px-4 h-10 duration-default">
      hi
    </button>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="hover:bg-primary text-foreground hover:text-background-1 h-10 aspect-square flex justify-center items-center text-2xl duration-default">
      <iconify-icon icon="mingcute:home-4-fill"></iconify-icon>
    </button>
  </Section>
</div>
