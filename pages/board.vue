<script setup lang="ts">
definePageMeta({
  // middleware: ['auth']
});

const board = {
  id: 1,
};

const __arr = Array.from({ length: 3 });
</script>
<template>
  <main class="flex-1 overflow-hidden">
    <div class="flex h-full flex-col">
      <div class="flex shrink-0 items-center justify-between p-4">
        <h1 class="text-2xl font-bold text-white">title</h1>
        <div class="space-x-4">
          <button
            class="ml-1 rounded-md bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-600"
          >
            Add list
          </button>
          <button
            class="rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-600"
          >
            settings
          </button>
        </div>
      </div>
      <div class="flex-1 overflow-x-auto">
        <div class="inline-flex h-full items-start space-x-4 px-4 pb-4">
          <div
            v-for="item in __arr"
            class="flex max-h-full w-72 flex-col rounded-md bg-gray-200"
          >
            <div class="flex items-center justify-between px-3 py-2">
              <h3 class="text-sm font-semibold text-gray-700">Backlog</h3>
              <button>Options</button>
            </div>
            <div class="flex flex-col overflow-hidden pb-3">
              <div class="flex-1 overflow-y-auto px-3">
                <ul class="space-y-3">
                  <li
                    v-for="item in __arr"
                    class="rounded-md border-b border-gray-300 bg-white p-3 shadow hover:bg-gray-50"
                  >
                    item
                  </li>
                </ul>
                <div class="mt-3">
                  <CreateCard :board="board" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
