<script setup lang="ts">
const props = defineProps({
  list: Object,
});

const isShowForm = ref(false);

const form = ref(null);
const { fetchCards, cards, saveCard, errorMessage } = useCards();

const onSubmit = async () => {
  const formData = {
    name: form.value,
    card_list_id: props.list.id,
  };

  await saveCard(formData);

  if (!!errorMessage.value) {
    return;
  }

  form.value = null;
};
</script>

<template>
  <form v-if="isShowForm" @submit.prevent="onSubmit">
    <input
      v-model="form"
      class="w-full rounded-md border-2 border-gray-300 p-2 text-sm shadow-sm"
      placeholder="list name"
      type="text"
    />

    <div class="mt-3 space-x-2">
      <button
        class="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500"
      >
        Create
      </button>
      <button
        type="button"
        @click="isShowForm = false"
        class="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500"
      >
        Cancel
      </button>
    </div>
  </form>

  <button
    v-if="!isShowForm"
    @click="isShowForm = true"
    class="w-full rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-black"
  >
    item add
  </button>
</template>
