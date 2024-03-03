<script setup lang="ts">
const auth = useAuthStore();

const handleLogout = async () => {
  await auth.logout();
};
</script>

<template>
  <div class="flex h-screen flex-col bg-sky-500">
    <nav class="flex shrink-0 items-center justify-between bg-white px-4 py-3">
      <NuxtLink class="text-3xl font-black" to="/">KBAPP</NuxtLink>
      <div>
        <NuxtLink
          class="text-md rounded-md px-3 py-2 font-medium hover:bg-gray-100"
          to="/boards"
        >
          boards
        </NuxtLink>
        <NuxtLink
          class="text-md rounded-md px-3 py-2 font-medium hover:bg-gray-100"
          to="/register"
        >
          register
        </NuxtLink>
        <NuxtLink
          class="text-md rounded-md px-3 py-2 font-medium hover:bg-gray-100"
          to="#"
        >
          my menu</NuxtLink
        >
      </div>
    </nav>
    <slot />
  </div>
</template>
