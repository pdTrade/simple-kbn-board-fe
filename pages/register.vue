<script setup lang="ts">
type Credentials = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const form = ref<Credentials>({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const auth = useAuthStore();

const handleRegister = async () => {
  const { error } = await auth.register(form.value);

  if (!error.value) {
    return navigateTo("/");
  }
};
</script>

<template>
  <div class="m-auto w-full max-w-xs">
    <form
      class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      @submit.prevent="handleRegister"
    >
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700" for="name">
          Name
        </label>
        <input
          class="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
          id="name"
          type="text"
          placeholder="xxxxx"
          v-model="form.name"
        />
      </div>
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700" for="email">
          Email
        </label>
        <input
          class="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
          id="email"
          type="text"
          placeholder="xxxx@xxx.com"
          v-model="form.email"
        />
      </div>
      <div class="mb-6">
        <label
          class="mb-2 block text-sm font-bold text-gray-700"
          for="password"
        >
          Password
        </label>
        <input
          class="mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
          id="password"
          type="password"
          placeholder="xxxxxxxx"
          v-model="form.password"
        />
      </div>
      <div class="mb-6">
        <label
          class="mb-2 block text-sm font-bold text-gray-700"
          for="password_confirmation"
        >
          Password
        </label>
        <input
          class="mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow"
          id="password_confirmation"
          type="password"
          placeholder="xxxxxxxx"
          v-model="form.password_confirmation"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>
