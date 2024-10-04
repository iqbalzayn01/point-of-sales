<script setup>
import FormProducts from '../components/FormProducts.vue';
</script>

<template>
  <main
    class="w-full bg-transparent border border-zinc-800 p-10 ml-1 mr-5 my-5 rounded-xl"
  >
    <div class="">
      <div class="mb-10">
        <h1 class="text-3xl text-white font-bold mb-2">Dashboard</h1>
        <p class="text-white">
          An any way to manage sales with care and precision.
        </p>
      </div>
      <FormProducts />
    </div>
  </main>
</template>

<style scoped></style>
