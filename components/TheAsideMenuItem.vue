<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <li>
    <a class="flex cursor-pointer px-6 py-3" :href="item.path">
      <span class="line-clamp-1 grow text-ellipsis">{{ item.name }}</span>
    </a>
  </li>
</template>
