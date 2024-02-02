<script setup type="ts">
definePageMeta({
  // middleware: ['auth']
});

const __arr = Array.from({ length: 10 });
</script>

<template>
  <div class="h-full bg-gray-100 px-4 py-6">
    <div class="mx-auto max-w-5xl">
      <div class="mb-4 flex items-center">
        <h3 class="font-black text-gray-700">My boards</h3>
        <button
          class="ml-4 rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-600"
        >
          Create board
        </button>
      </div>

      <ul class="md:grid-cols3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="items in __arr"
          class="relative min-h-24 rounded-md bg-sky-600 hover:bg-sky-700"
        >
          <a class="absolute inset-0 p-4 text-lg font-bold text-white" href="#">
            Board xxx
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
