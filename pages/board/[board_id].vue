<script setup lang="ts">
import Draggable from "vuedraggable"

definePageMeta({
  middleware: ['auth']
});
const { fetchLists, lists, saveList, errorMessage } = useLists();

const route = useRoute()
const boardId = route.params.board_id;

await fetchLists(boardId);

</script>
<template>
  <main class="overflow-hidden">
    <div class="flex h-full flex-col">
      <div class="flex shrink-0 items-center p-4 space-x-4">
        <h1 class="text-2xl font-bold text-white">title</h1>
        <div class="flex space-x-2">
            <CreateList :board-id="boardId" />
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
            v-for="item in lists"
            :key="item.id"
            class="flex max-h-full w-72 flex-col rounded-md bg-gray-200"
          >
            <div class="flex items-center justify-between px-3 py-2">
              <h3 class="text-sm font-semibold text-gray-700">{{item.name}}</h3>
              <button>Options</button>
            </div>
            <div class="flex flex-col overflow-hidden pb-3">
              <div class="flex-1 overflow-y-auto px-3">
                <draggable
                    v-model="item.cards"
                    group="cards"
                    item-key="id"
                    tag="ul"
                >
                  <template #item="{element}">
                    <li
                        class="rounded-md border-b border-gray-300 bg-white p-3 shadow hover:bg-gray-50"
                    >
                      {{element.name}}
                    </li>
                  </template>
                </draggable>
              </div>
              <div class="mt-3 px-3">
                <CreateCard :list="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
