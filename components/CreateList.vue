<script setup lang="ts">
const props = defineProps({
  boardId: String,
});

const isShowForm = ref(false);

const form = ref(null);
const { saveList, errorMessage } = useLists();

const onSubmit = async () => {
  const formData = {
    name: form.value,
    board_id: props.boardId,
  };

  await saveList(formData);

  if (!!errorMessage.value) {
    return;
  }

  form.value = null;
  isShowForm.value = false;
};
</script>

<template>
  <div class="relative">
    <button
      @click="isShowForm = true"
      class="ml-1 rounded-md bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-600"
    >
      list add
    </button>
    <div
      class="absolute left-0 z-10 mt-10 inline-block w-64 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-sm transition-opacity duration-500"
      :class="{ 'opacity-0': !isShowForm, invisible: !isShowForm }"
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
            placeholder="Card name"
            class="w-full rounded-md border-2 border-gray-300 p-2 text-sm shadow-sm"
          />

          <p class="text-sm text-red-600">
            {{ errorMessage }}
          </p>
          <div class="mt-2 flex justify-end">
            <button
              class="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
