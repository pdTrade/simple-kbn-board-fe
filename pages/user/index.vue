<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  layout: 'auth'
});

const users = [
  { id: 1, name: 'a', email: 'abc1@abc.com' },
  { id: 2, name: 'b', email: 'abc2@abc.com' },
]
</script>

<template>
    <div class="h-full bg-gray-100 px-4 py-6 pl-60">

      <header class="justify-between space-y-2 sm:flex sm:space-x-4 sm:space-y-0 sm:py-4">
        <div class="">
          <h1 class="text-2xl font-bold tracking-tight">
            Users
          </h1>
        </div>
        <div class="">
          <button class="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border outline-none min-h-2 px-4 text-sm text-white shadow border-transparent bg-sky-500">New User</button>
        </div>
      </header>

      <div class="border border-gray-300 bg-white shadow-sm rounded-md p-2">
        <table class="w-full">
          <thead>
          <tr class="bg-gray-500/5">
            <th class="px-4 py-2">
              Full name
            </th>
            <th class="px-4 py-2">
              Email address
            </th>
            <th class="px-4 py-2">
              Actions
            </th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="px-4 py-3">
              {{ user.name }}
            </td>
            <td class="px-4 py-3">
              {{ user.email }}
            </td>
            <td>
              <div class="flex items-center">
                <a :href="`user/${user.id}`">View</a>
                <a :href="`user/${user.id}/edit`">Edit</a>
              </div>
            </td>
          </tr>

          </tbody>

        </table>
      </div>
    </div>
</template>
