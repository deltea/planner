<script lang="ts">
	import Section from "$lib/components/Section.svelte";
    import { cn } from "$lib/utils";

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

  let sidebarOpen = false;
</script>

<div class="p-4 h-full flex">
  <!-- <Section name="nav" class="flex flex-col gap-2 w-20 h-full">
    <button class="bg-background-dark text-foreground hover:bg-primary hover:text-background-1 w-full aspect-square flex justify-center items-center text-xl duration-default" aria-label="button">
      <iconify-icon icon="mdi:home"></iconify-icon>
    </button>

    {#each classes as c}
      <button class="text-foreground hover:bg-background-1 w-full aspect-square flex justify-center items-center text-xl duration-default" aria-label="button">
        <iconify-icon icon={c.icon}></iconify-icon>
      </button>
    {/each}

    <div class="w-full absolute bottom-0 left-0 p-3">
      <button class="text-foreground hover:bg-primary hover:text-background-1 w-full aspect-square flex justify-center items-center text-2xl duration-default" aria-label="button">
        <iconify-icon icon="mdi:plus"></iconify-icon>
      </button>
    </div>
  </Section> -->

  <Section name="nav" class={cn("flex flex-col gap-2 h-full", sidebarOpen ? "w-52" : "w-20")} on:mouseover={() => sidebarOpen = true} on:mouseleave={() => sidebarOpen = false}>
    <button class={cn("bg-background-dark text-foreground hover:bg-primary hover:text-background-1 w-full px-4 flex items-center text-xl duration-default gap-4 h-[3.25rem]")} aria-label="button">
      <iconify-icon icon="mdi:home"></iconify-icon>
      {#if sidebarOpen}
        <h2 class="text-base">Home</h2>
      {/if}
    </button>

    <hr class="border-none h-border bg-background-1 my-2">

    <!-- Classes -->
    {#each classes as c}
      <button class={cn("text-foreground hover:bg-background-1 w-full px-4 flex items-center gap-4 h-[3.25rem] text-xl duration-default")} aria-label="button">
        <iconify-icon icon={c.icon}></iconify-icon>
        {#if sidebarOpen}
          <h2 class="text-base">{c.name}</h2>
        {/if}
      </button>
    {/each}

    <div class="w-full absolute bottom-0 left-0 p-3">
      <button class={cn("text-foreground hover:bg-primary hover:text-background-1 w-full px-4 gap-4 h-[3.25rem] flex items-center text-2xl duration-default")} aria-label="button">
        <iconify-icon icon="mdi:plus"></iconify-icon>
        {#if sidebarOpen}
          <h2 class="text-base whitespace-nowrap">Add class</h2>
        {/if}
      </button>
    </div>
  </Section>
</div>

