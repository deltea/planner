<script lang="ts">
	import Section from "$lib/components/Section.svelte";

  interface Class {
    name: string;
    icon: string;
  }

  const classes: Class[] = [
    { name: "Math", icon: "mdi:math-compass"},
    { name: "Spanish", icon: "mdi:translate"},
    { name: "Physics", icon: "mdi:earth"},
    { name: "History", icon: "mdi:history" },
    { name: "Robotics", icon: "mdi:robot"},
    { name: "English", icon: "mdi:book"},
  ];
</script>

<div class="p-4 h-full">
  <Section name="nav" class="flex flex-col gap-2 w-20 h-full">
    <button class="bg-background-dark text-foreground hover:bg-primary hover:text-background-1 w-full aspect-square flex justify-center items-center text-2xl duration-default" aria-label="button">
      <iconify-icon icon="mdi:home"></iconify-icon>
    </button>

    <!-- <hr class="border-none h-border w-full bg-background-1"> -->

    <!-- Classes -->
    {#each classes as c}
      <button class="text-foreground hover:bg-background-1 w-full aspect-square flex justify-center items-center text-2xl duration-default" aria-label="button">
        <iconify-icon icon={c.icon}></iconify-icon>
      </button>
    {/each}

    <div class="w-full absolute bottom-0 left-0 p-3">
      <button class="text-foreground hover:bg-primary hover:text-background-1 w-full aspect-square flex justify-center items-center text-3xl duration-default" aria-label="button">
        <iconify-icon icon="mdi:plus"></iconify-icon>
      </button>
    </div>
  </Section>
</div>
