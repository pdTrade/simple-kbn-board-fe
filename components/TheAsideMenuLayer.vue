<script setup lang="ts">
defineProps({
  menu: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <aside
    id="aside"
    class="transition-position fixed top-0 z-40 flex h-screen w-40 overflow-hidden"
  >
    <div class="flex flex-1 flex-col overflow-hidden bg-gray-50">
      <div class="flex h-14 flex-row items-center justify-between bg-gray-50">
        <div
          class="flex-1 text-center lg:pl-6 lg:text-left xl:pl-0 xl:text-center"
        >
          <b class="font-black">KBAPP</b>
        </div>
        <button class="hidden p-3 lg:inline-block xl:hidden"></button>
      </div>
      <div class="flex-1 overflow-y-auto overflow-x-hidden">
        <TheAsideMenuList :menu="menu" />
      </div>
    </div>
  </aside>
</template>
