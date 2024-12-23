<script lang="ts">
	import Section from "$lib/components/Section.svelte";

  interface Class {
    name: string;
    icon: string;
  }

  const classes: Class[] = [
    { name: "Math", icon: "mingcute:book-2-fill"},
    { name: "Spanish", icon: "mingcute:translate-2-line"},
    { name: "Physics", icon: "mingcute:science-line"},
    { name: "History", icon: "mingcute:time-fill" },
    { name: "Robotics", icon: "mingcute:android-2-fill"},
    { name: "English", icon: "mingcute:speech-fill"},
  ];
</script>

<div class="p-4 h-full">
  <Section name="nav" class="flex flex-col gap-2 w-20 h-full">
    <button class="bg-background-dark text-foreground hover:bg-primary hover:text-background-1 w-full aspect-square flex justify-center items-center text-2xl duration-default" aria-label="button">
      <iconify-icon icon="mingcute:home-4-fill"></iconify-icon>
    </button>

    <!-- <hr class="border-none h-border w-full bg-background-1"> -->

    <!-- Classes -->
    {#each classes as c}
      <button class="text-foreground hover:bg-background-1 w-full aspect-square flex justify-center items-center text-2xl duration-default" aria-label="button">
        <iconify-icon icon={c.icon}></iconify-icon>
      </button>
    {/each}

    <div class="w-full absolute bottom-0 left-0 p-3">
      <button class="text-foreground hover:bg-primary hover:text-background-1 w-full aspect-square flex justify-center items-center text-2xl duration-default" aria-label="button">
        <iconify-icon icon="mingcute:add-fill"></iconify-icon>
      </button>
    </div>
  </Section>
</div>
