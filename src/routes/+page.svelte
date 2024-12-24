<script lang="ts">
	import Section from "$lib/components/Section.svelte";
  import { cn, formatDate } from "$lib/utils";
  import { Dialog } from "bits-ui";
    import { fade } from "svelte/transition";

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

  interface Assignment {
    name: string;
    due: Date;
    completed: boolean;
  }

  const assignments: Assignment[] = [
    { name: "Read chapter 1", due: new Date("2024-01-20"), completed: false },
    { name: "Do exercise", due: new Date("2024-01-22"), completed: false },
    { name: "Write essay", due: new Date("2024-01-25"), completed: true },
    { name: "Study for test", due: new Date("2024-01-28"), completed: true },
  ];

  interface DialogInfo {
    name: string;
    due: Date;
    completed: boolean;
  }

  let dialogOpen = false;
  let dialogInfo: DialogInfo;

</script>

<div class="p-4 h-full flex gap-4">
  <Section
    name="nav"
    class="flex flex-col gap-2 h-full shrink-0 w-52"
  >
    <button
      class="bg-bg-dark text-fg hover:bg-primary hover:text-bg-1 w-full px-4 flex items-center text-xl duration-default gap-4 h-11"
      aria-label="button"
    >
      <iconify-icon icon="mdi:home"></iconify-icon>
      <h2 class="text-base">Home</h2>
    </button>

    <hr class="border-none h-border bg-bg-1 my-1">

    <!-- Classes -->
    {#each classes as c, i}
      <button
        class={cn(
          "text-fg hover:bg-bg-1 w-full px-4 flex items-center gap-4 h-11 text-xl duration-default",
          i !== 0 || "bg-bg-2"
        )}
        aria-label="button"
      >
        <iconify-icon icon={c.icon}></iconify-icon>
        <h2 class="text-base">{c.name}</h2>
      </button>
    {/each}

    <div class="w-full absolute bottom-0 left-0 p-3">
      <button
        class="text-fg hover:bg-primary hover:text-bg-1 w-full px-4 gap-4 h-11 flex items-center text-2xl duration-default"
        aria-label="button"
      >
        <iconify-icon icon="mdi:plus"></iconify-icon>
        <h2 class="text-base whitespace-nowrap">Add class</h2>
      </button>
    </div>
  </Section>

  <div class="flex flex-col gap-4 h-full w-full">
    <Section
      name="class"
      class="flex justify-between w-full px-5"
    >
      <div class="flex gap-4 items-center text-lg">
        <iconify-icon icon="mdi:translate"></iconify-icon>
        <h1>English</h1>
      </div>

      <div class="flex gap-2 items-center justify-center">
        <button class="text-lg text-fg hover:bg-bg-1 flex justify-center items-center h-7 w-7 duration-default" aria-label="button">
          <iconify-icon icon="mdi:pencil"></iconify-icon>
        </button>
        <button class="text-lg text-fg hover:bg-bg-1 flex justify-center items-center h-7 w-7 duration-default" aria-label="button">
          <iconify-icon icon="mdi:account"></iconify-icon>
        </button>
        <button class="text-lg text-fg hover:bg-bg-1 flex justify-center items-center h-7 w-7 duration-default" aria-label="button">
          <iconify-icon icon="mdi:cog"></iconify-icon>
        </button>
      </div>
    </Section>

    <div class="flex gap-4 h-full">
      <Section name="assignments" class="h-full w-full">
        <span class="relative w-full h-11">
          <input
            type="text"
            class="w-full focus:outline-none focus:ring-0 border-none px-4 bg-bg-dark text-fg placeholder:text-bg-3"
            placeholder="Search assignments"
          />

          <iconify-icon
            icon="mdi:magnify"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-bg-3"
          ></iconify-icon>
        </span>

        <hr class="my-3 border-none bg-bg-1 h-border">

        <div class="overflow-y-auto">
          {#each assignments as a}
            <button
              class="text-fg hover:bg-bg-1 w-full px-4 flex items-center justify-between h-16 gap-4 text-left duration-default"
              aria-label="button"
              on:click={() => {
                dialogOpen = true;
                dialogInfo = a;
              }}
            >
              <div>
                <p class="text-base">{a.name}</p>
                <!-- <span class="bg-bg-4 size-1 rounded-full"></span> -->
                <!-- <span class="font-normal text-bg-4">-</span> -->
                <p class="font-normal uppercase text-bg-4">{formatDate(a.due.toDateString())}</p>
              </div>

              <div class="text-xl text-fg hover:bg-bg-1 flex justify-center items-center h-7 w-7 duration-default hover:cursor-pointer" aria-label="button">
                <iconify-icon icon="mdi:dots-vertical"></iconify-icon>
              </div>
            </button>
          {/each}
        </div>
      </Section>

      <Section name="plan" class="h-full w-full">
        <span></span>
      </Section>
    </div>
  </div>
</div>

{#if dialogInfo}
  <Dialog.Root bind:open={dialogOpen}>
    <Dialog.Portal>
      <Dialog.Overlay transition={fade} class="fixed inset-0 z-50 bg-bg-dark/50" />
      <Dialog.Content class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[40rem] h-[20rem] font-bold font-mono text-fg">
        <Section class="bg-bg h-full p-4">
          <div class="flex items-center justify-between">
            <h1 class="text-xl ml-2">{dialogInfo.name}</h1>

            <Dialog.Close class="flex justify-center items-center size-8 hover:bg-bg-2 text-2xl duration-default">
              <iconify-icon icon="mdi:close"></iconify-icon>
            </Dialog.Close>
          </div>

          <hr class="my-3 border-none bg-bg-1 h-border">
        </Section>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
{/if}
