<script setup lang="ts">
const menu = [
  { name: "user", path: "/user" },
  { name: "type", path: "/type" },
];
</script>

<template>
  <TheAsideMenuLayer v-if="Object.keys(menu).length" :menu="menu" />
</template>
