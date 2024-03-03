<script setup lang="ts">
const props = defineProps({
  menu: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <ul>
    <TheAsideMenuItem v-for="(item, index) in menu" :key="index" :item="item" />
  </ul>
</template>
