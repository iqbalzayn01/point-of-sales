<script setup>
import Products from '../data/products.json';
</script>

<template>
  <form class="flex gap-5">
    <div class="card-products w-full">
      <p class="text-white mb-2">Products</p>
      <select
        name="products"
        class="w-full bg-transparent text-white border border-zinc-800 cursor-pointer p-2 rounded-lg"
      >
        <option
          v-for="item in Products"
          :key="item._id"
          :value="item._id"
          class="bg-black text-white"
        >
          {{ item.product_name }} - Rp.{{ item.product_price }}
        </option>
      </select>
    </div>
    <div class="card-qty">
      <p class="text-white mb-2">Quantity</p>
      <input
        type="number"
        class="w-full max-w-[100px] bg-transparent flex items-center justify-center text-center text-white border border-zinc-800 p-2 rounded-lg"
      />
    </div>
    <button
      class="w-full max-w-[100px] bg-white flex self-end items-center justify-center text-sm text-black font-medium p-1 rounded-lg"
      type="button"
    >
      Add
    </button>
  </form>
</template>

<style scoped></style>
