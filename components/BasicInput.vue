<script setup lang="ts">
defineProps(["modelValue"]);

defineEmits(["update:modelValue"]);

const input = ref(null);
</script>

<template>
  <input
    class="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
  />
</template>
