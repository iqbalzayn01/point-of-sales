<script setup>
import FormProducts from '../components/FormProducts.vue';
import Tables from '../components/Tables.vue';
</script>

<template>
  <main
    class="w-full bg-transparent border border-zinc-800 ml-1 mr-5 my-5 rounded-xl"
  >
    <div>
      <div class="border-b border-zinc-800 p-10">
        <h1 class="text-3xl text-white font-bold mb-2">Dashboard</h1>
        <p class="text-white">
          An any way to manage sales with care and precision.
        </p>
      </div>
      <div class="p-10">
        <FormProducts />
      </div>
      <div class="px-10">
        <Tables />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
