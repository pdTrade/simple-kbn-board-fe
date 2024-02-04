<script setup lang="ts">
definePageMeta({
  // middleware: ['auth']
});

const isShow = ref<boolean>(false);
const togglePopover = () => {
  isShow.value = !isShow.value;
};

const form = ref(null);

const { fetchBoards, boards, saveBoard } = useBoards();

await fetchBoards();

const onSubmit = async () => {
  const formData = {
    'name': form.value
  }
  await saveBoard(formData);
  togglePopover();
  await fetchBoards();
};
</script>

<template>
  <div class="h-full bg-gray-100 px-4 py-6">
    <div class="mx-auto max-w-5xl">
      <div class="relative mb-4 flex items-center">
        <h3 class="font-black text-gray-700">My boards</h3>
        <div class="flex flex-col">
          <button
            class="ml-4 rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-600"
            @click="togglePopover"
          >
            Create board
          </button>
          <div
            class="absolute z-10 mt-10 inline-block w-64 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-500"
            :class="{ 'opacity-0': !isShow, invisible: !isShow }"
          >
            <div class="px-3 py-2">
              <form @submit.prevent="onSubmit">
                <label class="text-sm font-medium text-gray-600" for="name"
                  >New board name:
                </label>
                <input
                  v-model="form"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Board name"
                  class="w-full rounded-md border-2 border-gray-300 p-2 text-sm shadow-sm"
                />

                <p class="text-sm text-red-600">errors</p>
                <div class="mt-2 flex justify-end">
                  <button
                    class="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
            <div data-popper-arrow></div>
          </div>
        </div>
      </div>

      <ul class="md:grid-cols3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="item in boards"
          :key="item.id"
          class="relative min-h-24 rounded-md bg-sky-600 hover:bg-sky-700"
        >
          <a class="absolute inset-0 p-4 text-lg font-bold text-white" href="#">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
