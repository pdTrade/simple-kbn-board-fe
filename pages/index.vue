<script setup lang="ts">
type Credentials = {
  email: string;
  password: string;
};

const form = ref<Credentials>({
  email: "",
  password: "",
});

const auth = useAuthStore();

const handleLogin = async () => {
  if (auth.isLoggedIn) {
    return navigateTo("/boards");
  }

  const { error } = await auth.login(form.value);

  if (!error.value) {
    return navigateTo("/boards");
  }
};
</script>

<template>
  <div class="m-auto w-full max-w-xs">
    <form
      class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      @submit.prevent="handleLogin"
    >
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
      <div class="flex items-center justify-between">
        <button
          class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
